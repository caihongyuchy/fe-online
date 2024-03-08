import delay from '../utils/delay';
interface Org {
  id: string;
  name: string;
}
const getOrgData = (): Org[] => {
  const count = Math.floor(Math.random() * 20);
  return Array(count)
    .fill(0)
    .map(() => {
      return {
        id: Math.random() + '',
        name: (Math.random() + 1).toString(36).substring(7),
        chinds:
          Math.random() > 0.5
            ? ''
            : [
                {
                  id: Math.random() + '',
                  name: (Math.random() + 1).toString(36).substring(3),
                },
              ],
      };
    });
};

const query = (parentId: string = '0') => {
  return delay(getOrgData());
};

const orgApi = {
  query,
};

export default orgApi;
