import ChoroplethMap from './choropleth';

import {
  MAP_META,
  MAP_STATISTICS,
  MAP_TYPES,
  MAP_VIEWS,
  STATE_POPULATIONS,
} from '../../constants';
import {
  formatDate,
  formatNumber,
  formatLastUpdated,
} from '../../utils/commonfunctions';

import React, {useState, useEffect, useMemo, useCallback} from 'react';
import ReactDOM from 'react-dom';
const getRegionFromState = (state) => {
  if (!state) return;
  const region = {...state};
  return region;
};
function MapExplorer({
  mapName,
  states,
  districts,
  stateTestData,
  regionHighlighted,
  setRegionHighlighted,
  mapOption,
  isCountryLoaded = true,
}) {
  const [currentMap, setCurrentMap] = useState({
    name: mapName,
    stat: MAP_STATISTICS.TOTAL,
    view:
      MAP_META[mapName].mapType === MAP_TYPES.COUNTRY
        ? MAP_VIEWS.STATES
        : MAP_VIEWS.DISTRICTS,
  });
  const currentMapMeta = MAP_META[currentMap.name];

  const [statistic, currentMapData] = useMemo(() => {
    let currentMapData = {};
    let statistic = {};
    {
      const dataTypes = ['confirmed', 'active', 'recovered', 'deceased'];
      statistic = dataTypes.reduce((acc, dtype) => {
        acc[dtype] = {total: 0, max: 0};
        return acc;
      }, {});
      if (currentMapMeta.mapType === MAP_TYPES.COUNTRY) {
        if (currentMap.view === MAP_VIEWS.STATES) {
          currentMapData = states.reduce((acc, state) => {
            acc[state.state] = {};
            dataTypes.forEach((dtype) => {
              let typeCount =
                parseInt(state[dtype !== 'deceased' ? dtype : 'deaths']) || 0;
              if (currentMap.stat === MAP_STATISTICS.PER_MILLION)
                typeCount = (1e6 * typeCount) / STATE_POPULATIONS[state.state];
              if (state.state !== 'Total') {
                statistic[dtype].total += typeCount;
                if (typeCount > statistic[dtype].max) {
                  statistic[dtype].max = typeCount;
                }
              }
              acc[state.state][dtype] = typeCount;
            });
            return acc;
          }, {});
        } 
      } else if (currentMapMeta.mapType === MAP_TYPES.STATE) {
        const districtWiseData = (
          districts[currentMap.name] || {districtData: {}}
        ).districtData;
        currentMapData[currentMap.name] = Object.keys(districtWiseData).reduce(
          (acc, district) => {
            acc[district] = {};
            return acc;
          },
          {}
        );
        currentMapData[currentMap.name].Total = {};
        const stateData = states.find(
          (state) => currentMap.name === state.state
        );
        dataTypes.forEach((dtype) => {
          currentMapData[currentMap.name].Total[dtype] =
            parseInt(stateData[dtype !== 'deceased' ? dtype : 'deaths']) || 0;
        });
      }
    }
    return [statistic, currentMapData];
  }, [currentMap, currentMapMeta.mapType, districts, states]);

  const [hoveredRegion, panelRegion] = useMemo(() => {
    if (!regionHighlighted.district) {
      const state = getRegionFromState(
        states.find((state) => regionHighlighted.state === state.state)
      );
      return [state, state];
    } 
  }, [
    states,
    regionHighlighted.state,
    regionHighlighted.district,
  ]);

  useEffect(() => {
    if (regionHighlighted.district) {
      if (
        currentMap.name !== regionHighlighted.state &&
        !(
          currentMapMeta.mapType === MAP_TYPES.COUNTRY &&
          currentMap.view === MAP_VIEWS.DISTRICTS
        )
      ) 
      {
        const state = regionHighlighted.state;
        const newMapMeta = MAP_META[state];
        if (!newMapMeta) {
          return;
        }
        setCurrentMap({
          name: state,
          view: MAP_VIEWS.DISTRICTS,
          stat:
            currentMap.stat === MAP_STATISTICS.PER_MILLION
              ? MAP_STATISTICS.TOTAL
              : currentMap.stat,
        });
      }
    }
  }, [
    isCountryLoaded,
    regionHighlighted.state,
    regionHighlighted.district,
    currentMap,
    currentMapMeta.mapType,
  ]);
  const switchMapToState = useCallback(
    (state) => {
      const newMapMeta = MAP_META[state];
      if (newMapMeta.mapType === MAP_TYPES.STATE) {
        const {districtData} = districts[state] || {
          districtData: {},
        };
        const topDistrict = Object.keys(districtData)
          .filter((state) => state !== 'Unknown')
          .sort((a, b) => {
            return districtData[b].confirmed - districtData[a].confirmed;
          })[0];
        ReactDOM.unstable_batchedUpdates(() => {
          setRegionHighlighted({
            district: topDistrict,
            state: state,
          });
        });
      }
       else 
       {
        ReactDOM.unstable_batchedUpdates(() => {
          setCurrentMap({
            name: 'India',
            view:
              currentMap.stat === MAP_STATISTICS.ZONE
                ? MAP_VIEWS.DISTRICTS
                : MAP_VIEWS.STATES,
            stat: currentMap.stat,
          });
          setRegionHighlighted({
            state: 'Total',
          });
        });
      }
    },
    [currentMap.stat, districts, setRegionHighlighted]
  );
  const testObj = stateTestData[panelRegion.state];
  return (
    <div
      className={`MapExplorer  ${
        'stickied' 
      }`}>
      <div className="header">
        <h1>
          {(currentMap.name)} {('Map')}
        </h1>
        <br></br>
      </div>

      <div className="map-stats">
        <div
          className={`stats ${
            mapOption === 'confirmed' 
          }`}
        >
          <h5>{window.innerWidth <= 769 ? ('Cnfmd') : ('Confirmed')}</h5>
          <div className="stats-bottom">
            <h1>{formatNumber(panelRegion.confirmed)}</h1>
            <h6>{`+${formatNumber(panelRegion.deltaconfirmed)}`}</h6>
          </div>
        </div>

        <div
          className={`stats is-blue ${
            mapOption === 'active' 
          }`}
        >
          <h5>{window.innerWidth <= 769 ? ('Actv') : ('Active')}</h5>
          <div className="stats-bottom">
            <h1>{formatNumber(panelRegion.active)}</h1>
            <h6>{` `}</h6>
          </div>
        </div>

        <div
          className={`stats is-green ${
            mapOption === 'recovered' 
          }`}
        >
          <h5>{window.innerWidth <= 769 ? ('Rcvrd') : ('Recovered')}</h5>
          <div className="stats-bottom">
            <h1>{formatNumber(panelRegion.recovered)}</h1>
            <h6>{`+${formatNumber(panelRegion.deltarecovered)}`}</h6>
          </div>
        </div>

        <div
          className={`stats is-gray  ${
            mapOption === 'deceased' 
          }`}

        >
          <h5>{window.innerWidth <= 769 ? ('Dcsd') : ('Deceased')}</h5>
          <div className="stats-bottom">
            <h1>{formatNumber(panelRegion.deaths)}</h1>
            <h6>{`+${formatNumber(panelRegion.deltadeaths)}`}</h6>
          </div>
        </div>

        <div
          className="stats is-purple tested "
        >
          <h5>{('Tested')}</h5>
          <div className="stats-bottom">
            <h1>{formatNumber(testObj?.totaltested)}</h1>
          </div>
        </div>
      </div>

      <div className="meta fadeInUp" >
        <h2>
          {hoveredRegion.district
            ? (hoveredRegion.district) +
              (hoveredRegion.district === 'Unknown'
                ? ` (${(hoveredRegion.state)})`
                : '')
            : (hoveredRegion.state)}
        </h2>

        {currentMapMeta.mapType !== MAP_TYPES.STATE &&
          panelRegion.lastupdatedtime && (
          <b>  <div className="last-update">
              <p className="last">{('Last updated')}<br></br>
                {isNaN(Date.parse(formatDate(panelRegion.lastupdatedtime)))
                  ? ''
                  : formatLastUpdated(panelRegion.lastupdatedtime) +
                    ' ' +
                    ('ago')}
              </p>
            </div></b>
          )}

        {currentMapMeta.mapType === MAP_TYPES.STATE ? (
          <div
            className="button back-button"
            onClick={() => switchMapToState('India')}
          >
            {('Back')}
          </div>
        ) : null}
      </div>

      <div>
        {mapOption && (
          <ChoroplethMap
            statistic={statistic}
            currentMap={currentMap}
            mapData={currentMapData}
            regionHighlighted={regionHighlighted}
            setRegionHighlighted={setRegionHighlighted}
            changeMap={switchMapToState}
            mapOption={mapOption}
            isCountryLoaded={isCountryLoaded}
          />
        )}
      </div>
      </div>
  );
}
export default React.memo(MapExplorer);