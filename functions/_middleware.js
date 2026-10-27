// Canonical host redirect: www.plantedbyfaith.com → plantedbyfaith.com, preserving path + query.
// The *.pages.dev test address stays reachable but is kept out of search engines.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'www.plantedbyfaith.com') {
    url.hostname = 'plantedbyfaith.com';
    return Response.redirect(url.toString(), 301);
  }
  const response = await context.next();
  if (url.hostname.endsWith('.pages.dev')) {
    const tagged = new Response(response.body, response);
    tagged.headers.set('X-Robots-Tag', 'noindex');
    return tagged;
  }
  return response;
}
