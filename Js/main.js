async function getDataWorld() {
  const data = await fetch("https://thevirustracker.com/free-api?global=stats");
  const dataJson = await data.json();
  const totalCasesh1 = document.getElementById("totalCases");
  const totalDeathh1 = document.getElementById("totalDeath");
  const totalRecoveredh1 = document.getElementById("totalRecovered");
  const totalDayCasesh1 = document.getElementById("totalDayCases");
  const totalDayDeathsh1 = document.getElementById("totalDayDeaths");
  const totalDayRecovh1 = document.getElementById("totalDayRecov");

  totalCasesh1.innerHTML = "Total Cases: " + dataJson.results[0].total_cases;
  totalDeathh1.innerHTML = "Total Deaths: " + dataJson.results[0].total_deaths;
  totalRecoveredh1.innerHTML =
    "Total Resolved Cases: " + dataJson.results[0].total_recovered;
  totalDayCasesh1.innerHTML =
    "Total New Cases: " + dataJson.results[0].total_new_cases_today;
  totalDayDeathsh1.innerHTML =
    "Total New Deaths: " + dataJson.results[0].total_new_deaths_today;
  totalDayRecovh1.innerHTML =
    "Total Active Cases: " + dataJson.results[0].total_active_cases;
}

async function getDataCountry() {
  const countryID = document.getElementById("countryInput").value;
  const data = await fetch(
    "https://thevirustracker.com/free-api?countryTotal=" + countryID
  );
  const dataJson = await data.json();
  const timeline = await fetch(
    "https://thevirustracker.com/free-api?countryTimeline=" + countryID
  );
  const timelineJson = await timeline.json();
  let chartDate = [];
  let chartInfo = [];
  let i = 0;
  for (let [date, info] of Object.entries(timelineJson.timelineitems[0])) {
    chartDate[i] = date;
    chartInfo[i] = info;
    i += 1;
  }

  console.log(chartDate, chartInfo);
  const totalCasesh1 = document.getElementById("totalCasesCountry");
  const totalDeathh1 = document.getElementById("totalDeathCountry");
  const totalRecoveredh1 = document.getElementById("totalRecoveredCountry");
  const totalDayCasesh1 = document.getElementById("totalDayCasesCountry");
  const totalDayDeathsh1 = document.getElementById("totalDayDeathsCountry");
  const totalDayRecovh1 = document.getElementById("totalDayRecovCountry");

  totalCasesh1.innerHTML =
    "Total Cases: " + dataJson.countrydata[0].total_cases;
  totalDeathh1.innerHTML =
    "Total Deaths: " + dataJson.countrydata[0].total_deaths;
  totalRecoveredh1.innerHTML =
    "Total Resolved Cases: " + dataJson.countrydata[0].total_recovered;
  totalDayCasesh1.innerHTML =
    "Total New Cases: " + dataJson.countrydata[0].total_new_cases_today;
  totalDayDeathsh1.innerHTML =
    "Total New Deaths: " + dataJson.countrydata[0].total_new_deaths_today;
  totalDayRecovh1.innerHTML =
    "Total Active Cases: " + dataJson.countrydata[0].total_active_cases;
}

getDataWorld();
