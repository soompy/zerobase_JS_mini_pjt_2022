;( () => {
  'use strict'

  const get = (target) => document.querySelector(target)
  get('.ball_answer')

  const init = () => {
    // form이 submit이 되면 playGame이라는 이벤트를 submit 이벤트에 담아 전송시킴
    get('form').addEventListener('submit', () => {
      playGame();
    })
    setHomeRun()
  }

  const baseball = {
    // step1
    limit: 10,
    digit: 4,
    trial: 0,
    end: false,
    $question: get('.ball_question'),
    $answer: get('.ball_answer'),
    $input: get('.ball_input'),
  }

  /* 
  // step3
    destructuring(구조분해할당)을 하여 각 객체의 값들을 미리 선언해줌
    구조분해할당(배열 속성을 해체하여 그 값을 개별 변수에 담을 수 있도록 표현)

    이렇게 해주면 baseball객체를 각각 key값으로 바로바로 전역으로 사용할 수 있다
  */
  const {limit, digit, $question, $answer, $input} = baseball
  /** const는 재할당이 불가능하기 때문에 trial과 end같이 중간에 바뀌는 값들은 let으로 선언해준다 */
  let {trial, end } = baseball

  
  const setHomeRun = () => {
    // 4자리 숫자를 모두 맞췄을 때
  }


  // step2
  const onPlayed = (number, hint) => {
    // 시도를 했을 때 number : 내가 입력한 숫자, hit : 현재 어떤 상황?
    return `<em>${trial}차 시도</em>: ${number}, ${hint}`
  }

  const isCorrect = () => {
    // 번호가 같은가?
  }

  const isDuplicate = () => {
    // 중복 번호가 있는가?
  }
  
  const getStrikes = () => {
    // 스트라이크 카운트는 몇개?
  }

  const getBalls = () => {
    // 볼 카운트는 몇개?
  }

  const getResult = () => {
    // 시도에 따른 결과는?
  }

  const playGame = (event) => {
    // 게임 플레이
    
    // step4
    event.preventDefault()

    if (!!end) {
      // 게임이 끝나지 않았다면 return해준다
      return
    }

    // 구조분해할당을 통해 input을 바로 가져다 쓸 수 있다
    const inputNumber = $input.value
    const { password } = baseball
    
    
    if (inputNumber.length !== digit) {
      // 자릿수가 4자리가 아닐경우 alert으로 4자리 숫자를 입력해주세요를 띄워줌
      alert(`${digit}자리 숫자를 입력해주세요.`)
    } else if (isDuplicate(inputNumber)) {
      alert('중복 숫자가 있습니다.')
    } else {
      // 시도횟수 추가 및
      trial++
      /* 
        시도에 따른 결과를 내가 입력한 값과 정답을 비교해서 넘겨주고, 맞다면 승리 조건을 아니면 실패처리를 넘겨줌
        그러고 나서 hint값으로 알려줌
      */
      const result = onPlayed(inputNumber, getResult(inputNumber, password))
      /*
        getResult로 받아온 값과 inputNumber값을 넘겨서 onPlayed에서 return한 시도와 
        숫자와 힌트 값을 구조분해할당해놓은 $question에 innerHtml로 노출시킴
      */  
      $question.innerHtml += `<span>${result}</span>`

      /** 
       그러다가 시도 횟수가 제한 횟수에 다다랐을때, 
       그리고 내가 입력한 값과 정답이 달라 맞추기를 실패했을 때      
      */
      if (limit <= trial && !isCorrect(inputNumber, password)) {
        // 쓰리아웃 알럿을 띄워주고
        alert('쓰리아웃!')
        // 게임을 종료시킴
        end = true
        // 그리고 정답을 노출시켜준다
        $answer.innerHtml = password
      }
    }

    /**
      그리고 입력했던 value와 value를 비워주고 input에 다시 focus를 시켜준다
      (그러면 게임을 다시 시작할 수 있다)
    */
    $input.value = ''
    $input.focus()
  }

  init();

})()
