
import * as assert from 'assert';
import { server, port } from "../dist/app.js";
import { got } from 'got';

before(function (done)
{
    server.listen(port);
    server.on("listening", function() {
        console.log("started");
        done();
    });
});

after(function (done)
{
    server.close();
    console.log("stopped");
    done();
});

describe('Main Test', () =>
{
    describe("basic test Hello World", () =>
    {
        it('should return \"Hello World!\"', async () =>
        {
            var res = await got.get("http://localhost:3000/");
            assert.equal(res.body, "Hello World!");

            //var response = await got.get("http://localhost:3000/");
            //assert.equal(response.body, "Hello World!");
        });
    });
});
