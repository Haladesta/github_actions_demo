
import { server, port } from "./app";

server.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
})
