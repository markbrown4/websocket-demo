
# WebSocket demo

The WebSocket API allows you to to maintain a continuous two-way connection between client and server.
Messages can be sent and received on both ends.

```bash
npm install
npm start
open http://localhost:8080/
```

Try opening multiple browsers and looking at the logs on client and server.
Here's what's happening:

- The client connects to `ws://localhost:8081/` via a `WebSocket`
- The client sends `{ message: 'Hello' }` to the server
- The server sends `{ message: 'Gotcha '}` when a connection is established.
- The server keeps track of all connections in `wss.clients`
- Every three seconds the server broadcasts `{ message: 'Hello hello!' }` to all connections.
- Connections can be closed by hitting the `Close` button or closing the window.
- You can send `{ message: 'Hey' }` to the server by hitting `Send Message`.
- The server sends `{ message: 'Something changed' }` to all connections when a message is received.

## Links

- [React to data changes](http://rauchg.com/2014/7-principles-of-rich-web-applications/#react-to-data-changes)
- [Writing WebSocket client applications](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Writing WebSocket servers](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
