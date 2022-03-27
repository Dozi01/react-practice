### Movie Web service with React

![image](https://user-images.githubusercontent.com/95427125/156485166-8e58f782-f0c1-4fae-a426-f5823c64c307.png)

 https://dozi01.github.io/

🛠 Using Skill

react node

### 직면한 기술적 문제들
1. slide component를 만들어서 user가 movie를 넘겨가며 볼 수 있게 만들기.

2. 무한 스크롤
 Group에서 groupmovie component를 페이지를 넘기는 방식보다는 스크롤을 내리면 리로드 되는 방식으로 구현하고 싶었다.

구현 과정
button을 눌렀을 때 API의 다음 페이지에 있는 movie들을 렌더링하는 기능을 구현했다.

Api 를 받아서 movies state에 잘 들어갔는데 바로 렌더링 되지 않고 버튼을 한 번 더 눌러야 렌더링이 되는 문제가 생겼다.
state가 바뀌어서 렌더링이 되어야 하는데 왜 안되는지 찾아보다가

https://db2dev.tistory.com/entry/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B0%95%EC%A0%9C-Re-render%ED%95%98%EA%B8%B0-re-render-%EC%9B%90%EB%A6%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4

이 블로그에서 state가 가리키는 참조값이 업데이트 되지 않으면 setMovies가 호출되기 전과 후의 movies를 같은 주소를 갖는 동일한 객체로 판단한다는 것을 알았다.

 json.data.movies.map((movie) => {
      movies.push(movie);
    });
    setMovies(movies);
이렇게 작성한 코드는 movies가 가리키는 참조값을 업데이트 하지 않기 때문에 바로 렌더링이 되지 않은 것이다.
그 다음에 또 버튼을 눌렀을 땐 page state가 변경되기 때문에 그전에 변경된 movies가 그제서야 렌더링 된 것.

    setMovies((current) => [...current, ...json.data.movies]);
이렇게 다시 작성하였더니 정상적으로 작동했다.

결과적으로 보면 몇 줄 바뀌지도 않은 것 같은데 이것저것 찾아보고 왜 안되는지 생각하느라 꽤 오랜 시간 걸렸다.
