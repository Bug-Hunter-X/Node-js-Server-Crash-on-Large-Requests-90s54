# Node.js Server Crash on Large Requests

This repository demonstrates a common issue in Node.js where servers crash when handling large requests due to improper memory management.  The `bug.js` file contains the vulnerable code, while `bugSolution.js` provides a corrected implementation.

## Vulnerability

The vulnerable code fails to handle large request bodies effectively.  As the incoming data grows, it consumes increasing amounts of memory without proper limits or buffering.  This can lead to memory leaks and eventually cause the Node.js process to crash.

## Solution

The solution implements proper request body handling.  It sets limits on the maximum request body size and uses streams to process the data in chunks, avoiding memory exhaustion. The solution is provided in `bugSolution.js`

## Mitigation

Always use streams to handle large amounts of data, and enforce request body size limits to prevent this type of attack.