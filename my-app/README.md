React Training Summary (Training Source : Nomad Coder)

About React 

Just Javascript  No framework to learn

별도의 프레임워크를 사용할 필요 없이 자바스크립트로 활용할 수 있음



Composition 

리액트 구조는 요소별, 컴포넌트별로 나눠서 작업할 수 있게 되어 있음



Unidirectional Dataflow

리액트는 단방향 데이터 플로우를 가짐. 데이터는 항상 일정한 장소에 위치해있고, 그 장소에서만 변경 가능

Angular의 경우 데이터는 view나 model로 변함. 리액트의 경우 데이터는 그대로 있고 상태가 변하면 UI가 업데이트 됨(데이터가 UI를 변경/ 단방향 데이터 플로우/데이터 > 데이터 변경 > UI 변경)



React is not a Framwok, UI Library



Information

- JSX : 리액트로 html을 쓰는 방법 / 리액트 컴포넌트를 만들때 사용하는 언어
  - JSX의 경우 명령을 실행시키려면 괄호를 꼭 쳐야 함
- Webpack : Transfiler 중 하나로, 리액트 코드를 브라우저가 이해할 수 있는 코드로 변경해주는 역할을 함
  ex) 웹팩을 이용해서 최근 자바스크립트를 브라우저가 이해할 수 있게 변경해 줘야 함
- CRA(Create React App) : 페이스북이 제공하는 손쉽게 리액트 앱을 만들어주는 툴. (기본 프로토콜은 리액트와 웹팩과 같은 툴을 이용해야 함) CRA는 별도의 configuration 없이 개발서버를 만들어 줌
- yarn & npm : 패키지 매니저
- Component
  - 리액트는 Component에 기반함
  - 모든 Component는 Render Function을 가짐
  - Component need to show somthing/need to render something (항상 Render를 해야함)
  - Render  : 이 Component가 나에게 보여주는 것이 무엇인가 / 무엇을 출력하는 기능
- 리액트와 리액트DOM의 차이 : 리액트는 UI 라이브러리 / 리액트DOM(Document Object Model)은 리액트를 웹사이트에 출력(render)하는 걸 도와주는 모델
  - 리액트를 사용해서 웹사이트에 올려놓고 싶으면 reactDOM을 사용
  - 리액트를 사용해서 모바일에 올려놓고 싶으면 reactNative를 사용
- 리액트DOM은 하나의 Component를 Render(출력)함
- Create Component > Render > Return > html Content > Browser
- Import React > Class > Render(필수 기능)
- 리액트의 주요 컨셉
  - Props : 큰 Component가 전체 정보를 가지고 있고 그리고 각기 칠드런에게 정보를 전달함. 이를 이용해 강력한 UI를 구축 할 수 있음. 각각의 Component에 props를 이용해 정보를 출력
  - State : state는 리액트 Component안에 있는 Object. 규칙은  state가 바뀔때 마다 render가 발생한다는 것
    - state는 직접 업데이트 할 수 없음 업데이트를 하기 위해선 setState()를 사용해야 함(그리고 업데이트 할 때마다 render가 작동. 새로운 state와 함께)
          this.setState()
          ex)
          state = {
              greeting: "Hello"
          }
          
          componentDidMount(){
              setTimeOut(()=>{
                  this.setState({
                      greeting : "Hello Again!"
                  })
              }, 5000)
          }
      
- PropTypes
  - props에 들어올 수 있는 type을 propTypes으로 설정
        title:PropTypes.string,
        poster:PropTypes.string
        
        title, poster 둘다 string type의 데이터를 받음을 설정
  - Install Prop-Types with npm:
         npm install --save prop-types
  - Install Prop-Types with yarn
         yarn add prop-types 
- Lifecycle Events on React
  - What? Component는 여러 기능들을 정해진 순서대로 실행
  - Render : componentWillMount() -> render() -> componentDidMount()
  - Update componentWillReceiveProps() -> shouldComponentUpdate()-> componentWillUpdate() -> render() -> componentDidUpdate()
- Component는 많은 function을 가지고 있고 function들은 순서대로, 자동으로 작동한다.
