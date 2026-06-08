import http.server
import socket
import sys
import os
import subprocess
import time

PORT = 8080

def kill_port_owners(port):
    """
    Finds and kills any processes currently listening on the specified port.
    """
    try:
        # Run netstat to find PIDs listening on the port
        output = subprocess.check_output('netstat -ano', shell=True).decode('utf-8', errors='ignore')
        pids_to_kill = set()
        for line in output.splitlines():
            if f':{port}' in line and 'LISTENING' in line:
                parts = line.strip().split()
                if len(parts) >= 5:
                    pid = parts[-1]
                    if pid.isdigit() and int(pid) != os.getpid():
                        pids_to_kill.add(int(pid))
        
        for pid in pids_to_kill:
            print(f"Terminating stale process with PID {pid} listening on port {port}...")
            subprocess.run(f'taskkill /F /PID {pid}', shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            time.sleep(0.5)
    except Exception as e:
        print(f"Error checking/killing processes on port {port}: {e}", file=sys.stderr)

class DualStackServer(http.server.ThreadingHTTPServer):
    address_family = socket.AF_INET6
    
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            # IPPROTO_IPV6 / IPV6_V6ONLY enables accepting both IPv4 and IPv6 connections on dual-stack
            self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        except Exception:
            pass
        super().server_bind()

def run():
    kill_port_owners(PORT)
    
    handler = http.server.SimpleHTTPRequestHandler
    
    try:
        server = DualStackServer(("", PORT), handler)
        print(f"Serving HTTP on dual-stack port {PORT} (http://localhost:{PORT} / http://127.0.0.1:{PORT})...")
    except Exception as e:
        print(f"Dual-stack server failed to start ({e}). Falling back to IPv4 only...", file=sys.stderr)
        class IPv4Server(http.server.ThreadingHTTPServer):
            address_family = socket.AF_INET
        server = IPv4Server(("", PORT), handler)
        print(f"Serving HTTP on IPv4 port {PORT} (http://127.0.0.1:{PORT})...")
        
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nKeyboard interrupt received, exiting.")
    finally:
        server.server_close()
        sys.exit(0)

if __name__ == '__main__':
    run()
