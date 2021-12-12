!(function () {
  const e = { unit: 'imperial' };
  function t(e) {
    const t = new Date(1e3 * e);
    const n = t.getHours();
    const a = '0'.concat(t.getMinutes());
    return ''.concat(n, ':').concat(a.substr(-2));
  }
  const n = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  function a(a) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q='
        .concat(a, '&APPID=e6ea60ae42c4f7ea5dbffec273b1f3a0&units=')
        .concat(e.unit),
      { mode: 'cors' }
    )
      .then((e) => e.json())
      .then((r) => {
        let o;
        let c;
        void 0 !== r.main &&
          ((function (e) {
            const t = document.getElementById('current-location');
            const n = document.getElementById('current-temperature');
            const a = document.getElementById('current-high');
            const r = document.getElementById('current-low');
            const o = document.getElementById('current-weather-icon');
            (t.innerHTML = ''.concat(e.name, ', ').concat(e.sys.country)),
              (n.innerHTML = ''.concat(Math.round(e.main.temp), '°')),
              (a.innerHTML = ''.concat(Math.round(e.main.temp_max), '°')),
              (r.innerHTML = ' '.concat(Math.round(e.main.temp_min), '°')),
              (o.src = 'http://openweathermap.org/img/wn/'.concat(
                e.weather[0].icon,
                '@2x.png'
              ));
          })(r),
          (function (e) {
            let t;
            document.getElementById('summary').innerHTML = ''
              .concat(
                ((t = e.weather[0].description),
                typeof t !== 'string'
                  ? ''
                  : t.charAt(0).toUpperCase() + t.slice(1)),
                '. The high is '
              )
              .concat(Math.round(e.main.temp_max), '° and the low is ')
              .concat(Math.round(e.main.temp_min), '°.');
          })(r),
          (function (e) {
            const n = document.getElementById('feels-like');
            const a = document.getElementById('rain-chance');
            const r = document.getElementById('sunrise-time');
            const o = document.getElementById('sunset-time');
            const c = document.getElementById('wind');
            const i = document.getElementById('humidity');
            const u = document.getElementById('pressure');
            const m = document.getElementById('visibility');
            (n.innerHTML = ''.concat(Math.round(e.main.feels_like), '°')),
              void 0 !== e.rain
                ? (a.innerHTML = ''.concat(100 * e.rain['1h'], '%'))
                : (a.innerHTML = '0%'),
              (r.innerHTML = t(e.sys.sunrise + e.timezone)),
              (o.innerHTML = t(e.sys.sunset + e.timezone)),
              (c.innerHTML = ''.concat(Math.round(e.wind.speed), ' mph')),
              (i.innerHTML = ''.concat(e.main.humidity, '%')),
              (u.innerHTML = ''.concat(e.main.pressure, ' hPa')),
              parseInt(e.visibility, 10) === 1e4
                ? (m.innerHTML = '6+ mi')
                : (m.innerHTML = ''.concat(
                    Math.round(0.0006213712 * e.visibility),
                    ' mi'
                  ));
          })(r),
          (o = r.coord.lat),
          (c = r.coord.lon),
          fetch(
            'https://api.openweathermap.org/data/2.5/onecall?lat='
              .concat(o, '&lon=')
              .concat(c, '&exclude=minutely,alerts&units=')
              .concat(e.unit, '&appid=e6ea60ae42c4f7ea5dbffec273b1f3a0'),
            { mode: 'cors' }
          )
            .then((e) => e.json())
            .then((e) => {
              !(function (e) {
                for (
                  let t = document.getElementsByClassName('hourly-headline'),
                    n = e,
                    a = 0;
                  a < 12;
                  a++
                ) {
                  const r = new Date(1e3 * (n += 3600)).getHours();
                  t[a].innerHTML = ''.concat(r, ':00');
                }
              })(e.current.dt + e.timezone_offset),
                (function (e) {
                  for (
                    let t = document.getElementsByClassName(
                        'hourly-weather-icon'
                      ),
                      n = document.getElementsByClassName('hourly-temperature'),
                      a = 0;
                    a < 12;
                    a++
                  )
                    (t[a].src = 'http://openweathermap.org/img/wn/'.concat(
                      e.hourly[a].weather[0].icon,
                      '@2x.png'
                    )),
                      (n[a].innerHTML = ''.concat(
                        Math.round(e.hourly[a].temp),
                        '°'
                      ));
                })(e),
                (function (e) {
                  for (
                    let t = document.getElementsByClassName('day'),
                      a = e,
                      r = 0;
                    r < 7;
                    r++
                  ) {
                    const o = new Date(1e3 * (a += 86400));
                    const c = n[o.getDay()];
                    t[r].innerHTML = c;
                  }
                })(e.current.dt + e.timezone_offset),
                (function (e) {
                  for (
                    let t =
                        document.getElementsByClassName('week-weather-icon'),
                      n = document.getElementsByClassName('day-temperature'),
                      a = 1;
                    a < 8;
                    a++
                  )
                    (t[a - 1].src = 'http://openweathermap.org/img/wn/'.concat(
                      e.daily[a].weather[0].icon,
                      '@2x.png'
                    )),
                      (n[a - 1].innerHTML = ''.concat(
                        Math.round(e.daily[a].temp.max),
                        '°'
                      ));
                })(e);
            })
            .catch((e) => {
              console.log(e);
            }),
          localStorage.setItem('location', a));
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function r(e, t, n, a, r, o, c) {
    try {
      var i = e[o](c);
      var u = i.value;
    } catch (e) {
      return void n(e);
    }
    i.done ? t(u) : Promise.resolve(u).then(a, r);
  }
  function o(e) {
    return function () {
      const t = this;
      const n = arguments;
      return new Promise((a, o) => {
        const c = e.apply(t, n);
        function i(e) {
          r(c, a, o, i, u, 'next', e);
        }
        function u(e) {
          r(c, a, o, i, u, 'throw', e);
        }
        i(void 0);
      });
    };
  }
  function c() {
    return (c = o(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap((e) => {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                a(document.getElementById('searchbar').value),
                  (document.getElementById('searchbar').value = '');
              case 2:
              case 'end':
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  const i = localStorage.getItem('location');
  (function (e) {
    let t;
    try {
      t = window.localStorage;
      const n = '__storage_test__';
      return t.setItem(n, n), t.removeItem(n), !0;
    } catch (e) {
      return (
        e instanceof DOMException &&
        (e.code === 22 ||
          e.code === 1014 ||
          e.name === 'QuotaExceededError' ||
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        t &&
        t.length !== 0
      );
    }
  })() && localStorage.getItem('location')
    ? a(i)
    : a('Reykjavík'),
    document.getElementById('search').addEventListener('submit', (e) => {
      e.preventDefault();
    });
  const u = document.getElementById('current-unit');
  const m = document.getElementById('temperature-unit-switch');
  (u.innerHTML = ''.concat(e.unit, '.')),
    m.addEventListener('click', () => {
      const t = document.getElementById('current-location').innerHTML;
      e.unit === 'imperial' ? (e.unit = 'metric') : (e.unit = 'imperial'),
        a(t),
        (document.getElementById('current-unit').innerHTML = ''.concat(
          e.unit,
          '.'
        ));
    }),
    document
      .getElementById('search-button')
      .addEventListener('click', function () {
        return c.apply(this, arguments);
      });
})();
