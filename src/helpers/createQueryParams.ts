export default function createQueryParams(params: Object, nameFilter: string): string {
  let paramsUrl = '';
  if (params !== undefined && Object.keys(params).length > 0) {
    paramsUrl += `${Object.entries(params).map((v) => v[1] !== undefined && `${nameFilter}[${v[0]}]=${v[1]}`).join('&')}&`;
  }
  return paramsUrl;
}
