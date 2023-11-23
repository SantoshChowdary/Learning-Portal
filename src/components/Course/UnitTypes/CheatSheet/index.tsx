import React from 'react'
import ReactMarkdown  from 'react-markdown';
import './index.css'

const markdownContent = ` ## Dummy Markdown
  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.

  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.
  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.
  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.
  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.
  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.
  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.
  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.
  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.
  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  In this example, if day is equal to 3, the switch statement will execute the code block associated with the case 3 label. If the day is not any of the defined cases, the default code block will be executed.

  Make sure to use the break statement after each case to prevent the code from falling through to the next case. If the break statement is omitted, the execution will continue with the next case regardless of whether the case matches the expression.

  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.
  You can use switch statements when you have multiple conditions to check against the same variable or expression. It helps simplify the code and make it more readable in situations where there are multiple possible execution paths based on different values.
`;

export const CheatSheet = (props: any) => {
  return (
    <div className='cheatsheet-section'>
      {/* <ReactMarkdown>
        {markdownContent}
      </ReactMarkdown> */}

      <iframe title="cheat-sheet" srcDoc={`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Beautiful Page</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              color: #333;
            }
        
            header {
              background-color: #3498db;
              color: #fff;
              padding: 1em;
              text-align: center;
            }
        
            main {
              max-width: 800px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
            }
        
            h1, h2 {
              color: #3498db;
            }
        
            p {
              line-height: 1.6;
            }
        
            footer {
              text-align: center;
              padding: 1em;
              background-color: #3498db;
              color: #fff;
            }
          </style>
        </head>
        <body>
          <header>
            <h1>Beautiful Page</h1>
          </header>
        
          <main>
            <h2>Welcome to My Page</h2>
            <p>This is a simple static HTML page. You can customize and expand upon it to create your own masterpiece!</p>
        
            <p>Here are some features:</p>
            <ul>
              <li>Clean and simple design</li>
              <li>Responsive layout</li>
              <li>Customizable styles</li>
            </ul>
          </main>
        
          <footer>
            <p>&copy; 2023 Copy rights reserved</p>
          </footer>
        </body>
        </html>
        
      `} width="70%" height="100%">
        
      </iframe>
    </div>
  )
}

export default CheatSheet