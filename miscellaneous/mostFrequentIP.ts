
//getMostFrequentIp(new String[]{"10.0.0.1 - GET 2020-08-24",
//"10.0.0.1 - GET 2020-08-24", "10.0.0.2 - GET 2020-08-20",
//"10.0.0.3 - GET 2020-08-24","10.0.0.3 - GET 2020-08-24",
//"10.0.0.3 - GET 2020-08-24","10.0.0.4 - GET 2020-08-24",});
// }

function getMostFrequentIP(logs: string[]): string[] {
  const frequencyMap = logs.reduce((map, log) => {
    const ip = log.split(" ")[0]; 
    map[ip] = (map[ip] || 0) + 1; 
    return map;
  }, {} as Record<string, number>);

  const maxFrequency = Math.max(...Object.values(frequencyMap));

  const mostFrequent = Object.keys(frequencyMap).filter(
    (ip) => frequencyMap[ip] === maxFrequency
  );

  return mostFrequent;
}
