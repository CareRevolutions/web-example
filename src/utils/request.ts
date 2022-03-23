export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export async function request(url: string, options?: RequestInit) {
  try {
    // Fetch data from the API
    const fetchResponse = await fetch(url, options);
    //  Try to parse the response as JSON
    const parsedResponse = await parseJSON(fetchResponse);
    const error = parsedResponse.error_message;
    // If there is an error, return the error message, ottherwise return the response
    if (error) return { error };
    // Otherwise, return the response
    return parsedResponse;
  } catch (error) {
    // If there is no body or the body is not JSON, return a genereic error message.
    console.log(error); // Log the error to the console or 3rd party service like sentry.io
    return { error: 'Unkown error occured' };
  }
}
