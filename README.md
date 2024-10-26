# Expense Tracker

A simple expense tracking web application that helps you manage your finances by tracking income and expenses. This project provides a balance overview, transaction history, and an easy-to-use form to add and categorize transactions as either income or expenses.

---

간단한 수입과 지출을 추적하여 재정을 관리할 수 있도록 돕는 웹 애플리케이션입니다. 현재 잔액, 거래 내역, 그리고 수입 또는 지출을 카테고리화하여 추가할 수 있는 간편한 양식을 제공합니다.

---

## Features / 주요 기능

- **Balance Tracking** / **잔액 추적**: Displays the current balance based on income and expenses.  
  수입과 지출을 기반으로 현재 잔액을 표시합니다.
  
- **Income and Expense Overview** / **수입 및 지출 개요**: Shows total income and total expenses separately.  
  총 수입과 총 지출을 각각 표시합니다.
  
- **Transaction History** / **거래 내역**: A list view of all past transactions, with options to filter by income or expense type.  
  전체 거래 내역을 리스트 형태로 볼 수 있으며, 수입 또는 지출별로 필터링할 수 있습니다.
  
- **Add and Delete Transactions** / **거래 추가 및 삭제**: Allows adding new transactions with descriptions and amounts. Transactions can be removed when no longer needed.  
  새로운 거래를 설명과 금액으로 추가할 수 있으며, 필요 없을 시 삭제가 가능합니다.
  
- **Data Persistence** / **데이터 지속성**: Transactions are stored in `localStorage`, preserving data even after the page is reloaded.  
  거래 내역이 `localStorage`에 저장되어 페이지를 새로고침해도 데이터가 유지됩니다.
  
- **Responsive Layout** / **반응형 레이아웃**: Optimized for both desktop and mobile screens.  
  데스크톱과 모바일 화면 모두에 최적화되어 있습니다.

---

## Getting Started / 시작하기

### Prerequisites / 사전 준비 사항

To run this project, you need a basic web server to serve static HTML, CSS, and JavaScript files. You can use any of the following methods:  
이 프로젝트를 실행하려면 HTML, CSS, JavaScript 파일을 서비스할 수 있는 간단한 웹 서버가 필요합니다. 다음과 같은 방법을 사용할 수 있습니다:

- Open `index.html` directly in your browser.  
  `index.html` 파일을 브라우저에서 직접 열기.
  
- Use an IDE like Visual Studio Code with the **Live Server** extension.  
  Visual Studio Code의 **Live Server** 확장 기능을 사용.

### Installation / 설치

1. Clone the repository:  
   저장소를 클론합니다:
    ```bash
    git clone https://github.com/yourusername/expense-tracker.git
    ```
2. Navigate to the project directory:  
   프로젝트 디렉터리로 이동합니다:
    ```bash
    cd expense-tracker
    ```

3. Open `index.html` in a web browser or run a live server from your code editor.  
   `index.html` 파일을 웹 브라우저에서 열거나 코드 편집기에서 라이브 서버를 실행합니다.

---

## Folder Structure / 폴더 구조

- `index.html` - Main HTML file with structure and references to CSS and JavaScript files.  
  HTML 구조와 CSS, JavaScript 파일을 참조하는 메인 파일입니다.
  
- `style.css` - Stylesheet for layout, typography, and responsiveness.  
  레이아웃, 타이포그래피, 반응형 디자인을 위한 스타일 시트입니다.
  
- `script.js` - Contains all JavaScript logic for managing transactions and updating UI.  
  거래 관리와 UI 업데이트를 위한 JavaScript 로직이 포함되어 있습니다.

---

## Code Overview / 코드 개요

### HTML

The HTML structure consists of:  
HTML 구조는 다음과 같습니다:

- A **Balance Section** to display the current balance.  
  현재 잔액을 표시하는 **잔액 섹션**.
  
- **Income and Expense** display sections.  
  **수입 및 지출**을 표시하는 섹션.
  
- A **Transaction History** list.  
  **거래 내역** 목록.
  
- A **Form** for adding new transactions.  
  새로운 거래를 추가할 수 있는 **폼**.

### JavaScript

- `script.js` manages:  
  `script.js`에서는 다음을 관리합니다:

  - Transaction addition, deletion, and updating balance.  
    거래 추가, 삭제, 잔액 업데이트.
  
  - Filtering transactions by type (income or expense).  
    거래 유형(수입 또는 지출)별 필터링.
  
  - Persisting transactions in `localStorage`.  
    거래 내역을 `localStorage`에 저장.

### CSS

- `style.css` includes styles for layout, colors, and responsiveness.  
  `style.css`에는 레이아웃, 색상, 반응형 디자인을 위한 스타일이 포함되어 있습니다.

---

## Usage / 사용법

1. **View Current Balance** / **현재 잔액 보기**: The main balance is shown at the top.  
   상단에서 현재 잔액이 표시됩니다.
   
2. **Filter Transactions** / **거래 내역 필터링**: Use the buttons to filter the view to show only income, only expenses, or all transactions.  
   버튼을 사용하여 수입, 지출, 전체 거래 내역을 필터링할 수 있습니다.
   
3. **Add a Transaction** / **거래 추가**:
   - Enter a description and amount in the form.  
     폼에 설명과 금액을 입력합니다.
   - Select either "Income" or "Expense".  
     "수입" 또는 "지출"을 선택합니다.
   - Click **Add transaction** to save.  
     **거래 추가**를 클릭하여 저장합니다.
     
4. **Delete a Transaction** / **거래 삭제**: Click the `x` button next to a transaction to remove it from the list.  
   거래 항목 옆의 `x` 버튼을 클릭하여 거래를 목록에서 삭제할 수 있습니다.

---

## Functions and Methods / 주요 함수 및 메서드

### Key Functions in `script.js` / `script.js`의 주요 함수

- `addTransaction(e)`: Adds a new transaction to the list and updates `localStorage`.  
  새로운 거래를 리스트에 추가하고 `localStorage`를 업데이트합니다.
  
- `updateValues()`: Calculates and displays the current balance, income, and expense totals.  
  현재 잔액, 수입, 지출 합계를 계산하여 표시합니다.
  
- `removeTransaction(id)`: Removes a transaction by its ID.  
  ID를 기준으로 거래를 삭제합니다.
  
- `showTypeHistory()`: Filters transactions based on the selected view (All, Income, Expense).  
  선택한 보기(전체, 수입, 지출)에 따라 거래를 필터링합니다.

---
## Lessons Learned and Areas for Improvement / 깨달은 점과 보완할 점

### Lessons Learned / 깨달은 점

- **Managing Data Locally**: By using `localStorage` to persist data, I learned how to save and retrieve data on the client side, ensuring that user transactions are not lost on page reloads.  
  `localStorage`를 사용하여 데이터를 클라이언트 측에 저장하고 페이지가 새로 고침될 때도 거래 내역이 유지되도록 하는 방법을 배웠습니다.
  
- **DOM Manipulation**: Implementing dynamic elements such as updating the balance, adding and removing transactions, and filtering views allowed me to better understand DOM manipulation with JavaScript.  
  잔액 업데이트, 거래 추가 및 삭제, 필터링과 같은 동적 요소를 구현하면서 JavaScript로 DOM 조작하는 방법을 더 잘 이해하게 되었습니다.
  
- **Event Handling**: Handling form submissions, button clicks, and other interactions helped me deepen my knowledge of JavaScript event handling and how to provide a smooth user experience.  
  폼 제출, 버튼 클릭 등 다양한 상호작용을 처리하면서 JavaScript 이벤트 처리와 사용자 경험을 향상시키는 방법에 대해 더 깊이 알게 되었습니다.

### Areas for Improvement / 보완할 점

- **Data Validation**: Currently, there is limited validation for input fields (e.g., ensuring non-empty input). Adding stricter validation, such as checking for valid numbers, could prevent potential errors and improve reliability.  
  현재 입력 필드에 대한 검증이 제한적이므로 (예: 빈 입력값 방지), 유효한 숫자 검증과 같은 보다 엄격한 입력 검증을 추가하여 잠재적인 오류를 방지하고 신뢰성을 높일 수 있습니다.
  
- **Enhanced User Feedback**: Providing more detailed feedback for actions like successful transactions or validation errors would improve the user experience, helping users understand what actions have been completed or what needs correction.  
  거래 성공 또는 검증 오류와 같은 작업에 대한 더 상세한 피드백을 제공하면 사용자 경험이 향상되며, 사용자들이 어떤 작업이 완료되었거나 수정이 필요한지 쉽게 이해할 수 있을 것입니다.
  
- **Code Optimization**: The current code could benefit from modularization by breaking it into smaller, reusable functions. This would make the code more maintainable, especially as the project scales.  
  현재 코드를 더 작은 재사용 가능한 함수로 나누어 모듈화하면, 코드의 유지보수성이 향상되며 프로젝트가 확장되더라도 더 쉽게 관리할 수 있습니다.
  
- **Responsive Design**: While the project is optimized for both desktop and mobile, adding more refined CSS for smaller screens would further improve the app's usability on various devices.  
  이 프로젝트는 데스크톱과 모바일 모두에 최적화되어 있지만, 더 세밀한 소형 화면용 CSS를 추가하면 다양한 기기에서 앱 사용성을 더욱 개선할 수 있습니다.
  
- **Potential Backend Integration**: To make this project more robust, a future version could integrate a backend service for storing data securely and synchronizing across multiple devices.  
  이 프로젝트를 더욱 견고하게 만들기 위해, 향후 버전에서는 데이터를 안전하게 저장하고 여러 기기에서 동기화할 수 있도록 백엔드 서비스를 통합할 수 있습니다.

