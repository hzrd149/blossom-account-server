export const unixNow = () => Math.floor(Date.now() / 1000);
export const newExpirationValue = () => (unixNow() + 60 * 5).toString();
