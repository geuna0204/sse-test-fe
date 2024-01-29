import { HttpResponse, http } from "msw";

const eventSourceStream = () => {
  return new Promise((resolve) => {
    const events = [
      'data: {"message": "Hello"}\n\n',
      'data: {"message": "World"}\n\n',
    ];

    events.forEach((event, index) => {
      setTimeout(() => {
        resolve(event);
      }, index * 1000);
    });
  });
};

export const handlers = [
  http.get("/sse-endpoint", ({ request }) => {
    console.log(request);
    // return new Response(
    // ctx.status(200),
    // ctx.set({
    //   "Content-Type": "text/event-stream",
    //   "Cache-Control": "no-cache",
    //   Connection: "keep-alive",
    // }),
    // ctx.body(eventSourceStream())
    // );
  }),
];
