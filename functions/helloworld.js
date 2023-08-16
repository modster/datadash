export function onRequest (context) {
  return new Response("Hello, world!")
}


// const handler: ExportedHandler = {
//   async fetch(req) {
//     const data =
//       req.cf !== undefined
//         ? req.cf
//         : { error: "The `cf` object is not available inside the preview." };

//     return new Response(JSON.stringify(data, null, 2), {
//       headers: {
//         "content-type": "application/json;charset=UTF-8",
//       },
//     });
//   },
// };

// export default handler;
