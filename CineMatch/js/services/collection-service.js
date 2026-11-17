const STORAGE_KEY = 'cinematch-demo-collection-v1';
function read() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"interested":[],"dismissed":[]}'); }
  catch { return { interested: [], dismissed: [] }; }
}
function write(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
export const collectionService = {
  get() { return read(); },
  setInterest(title) {
    const data = read();
    data.dismissed = data.dismissed.filter(item => item !== title);
    if (!data.interested.includes(title)) data.interested.push(title);
    write(data);
    return data;
  },
  dismiss(title) {
    const data = read();
    data.interested = data.interested.filter(item => item !== title);
    if (!data.dismissed.includes(title)) data.dismissed.push(title);
    write(data);
    return data;
  }
};
