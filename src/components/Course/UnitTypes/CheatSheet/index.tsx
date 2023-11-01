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
      <ReactMarkdown>
        {markdownContent}
      </ReactMarkdown>
    </div>
  )
}

export default CheatSheet