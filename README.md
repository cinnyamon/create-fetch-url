# Create-Fetch-URL-function
Function that returns a fetch URL with parameters that you pass in. Easy to use, fast as hell.

# How to use:

Call the function like this:
    `getFetchURL({ apiEndPoint: "/your/api/endpoint/here", params: ["firstparamkey", "firstparamvalue", "2ndparamkey", "2ndparamvalue", etc (as many as you want)] });`

    returns -> ("http or https ://yoururlhere.tld/your/api/endpoint?firstparamkey=firstparamvalue&2ndparamkey=2ndparamvalue")

# My example:

    await fetch(
        getFetchURL({
          apiEndPoint: "/api/settings",
          params: ['custom-key', true],
        }), { method: "POST" });

# If this function was useful to you pls gib star. thank :DD
