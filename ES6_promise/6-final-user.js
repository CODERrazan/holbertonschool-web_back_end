export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) =>
    results.map((res) => {
      if (res.status === 'fulfilled') {
        return { status: res.status, value: res.value };
      }
      return { status: res.status, value: res.reason.toString() };
    })
  );
}
