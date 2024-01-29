import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

let counter = 0;

const headers = {
  "Content-Type": "text/event-stream",
  Connection: "keep-alive",
  "Cache-Control": "no-cache",
  "Access-Control-Allow-Origin": "http://localhost:3002",
  "Access-Control-Allow-Credentials": "true",
};

export const server = setupServer(
  http.get("/subscribe", (request) => {
    console.log(request);
    console.log("request received");
    return new HttpResponse(null, {
      headers: headers,
      status: 200,
    });
    // return HttpResponse.json({
    //   id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
    //   firstName: "John",
    // });
  })
);

// server.listen();
