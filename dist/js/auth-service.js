async function subscribeUser(email, name, ref) {
  const url = `https://api.wealthpal.io/users/subscribe/${email}${
    ref ? "?subRefCode=" + ref : ""
  }`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.warn(error);
  }
}