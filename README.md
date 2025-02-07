# Bible Trivia Quiz App

Bible Trivia Quiz App은 성경의 다양한 주제(성경 기본, 성경 구절, 성경 인물, 성경 역사)를 퀴즈 형식으로 테스트할 수 있는 인터랙티브 웹 애플리케이션입니다. 사용자는 각 카테고리별 퀴즈에 도전하며 자신의 성경 지식을 점검하고, 진행 상황에 따라 해금되는 퀘스트를 통해 추가 도전을 경험할 수 있습니다.

## 주요 기능

- **퀴즈 도전**  
  - 각 카테고리는 20문항으로 구성되어 있으며, 사용자는 문제를 풀며 점수와 진행 상황을 실시간으로 확인할 수 있습니다.
  - 정답 선택 시 애니메이션 효과와 즉각적인 피드백이 제공됩니다.

- **퀘스트맵**  
  - 사용자가 퀴즈를 진행할 때마다 전역 상태(QuizContext)를 통해 진행 상황이 업데이트됩니다.
  - QuestMap 컴포넌트에서는 각 카테고리의 퀘스트가 "locked", "in-progress", "completed" 상태로 동적으로 표시됩니다.
  - **지도 모달**: "지도에서 새로운 퀘스트 찾기!" 버튼을 클릭하면, 인터랙티브 지도 모달이 열리며 잠긴 퀘스트들의 위치와 정보를 한눈에 확인할 수 있습니다. 아이콘을 클릭하면 상세 정보와 해금 조건을 팝업 형태로 제공합니다.

- **진행률 표시**  
  - ProgressBar 컴포넌트를 통해 사용자가 현재까지 푼 문제 수와 전체 문제 수를 퍼센트 및 숫자로 시각화합니다.

- **반응형 디자인**  
  - 데스크톱, 태블릿, 모바일 등 다양한 기기에서 최적화된 UI를 제공하며, 사용자 친화적인 인터랙션을 구현했습니다.

- **전역 상태 관리**  
  - React Context를 사용하여 각 카테고리의 퀴즈 진행 상태, 점수, 완료 여부를 전역적으로 관리합니다.

## 기술 스택

- **React**: 사용자 인터페이스 개발
- **React Router**: 페이지 라우팅 및 네비게이션 관리
- **React Context**: 전역 상태 관리
- **Heroicons**: SVG 기반 아이콘 제공
- **CSS Modules**: 컴포넌트별 스타일 관리
- **Vite**: 빠른 개발 서버 및 번들러