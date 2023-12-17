import React, { useRef, useEffect, useState } from "react";
import Editior from "@monaco-editor/react";
import "./EditiorHome.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

export default function EditiorHome1() {
  const EditorRef = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState("C"); // Default language is "java"

  // Default code snippets for each language
  const defaultCodeSnippets = {
    // Python: 'print("Hello, World!")',
    C: '#include <stdio.h>\n\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}',
    CPP: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n  return 0;\n}',
    Js: 'console.log("Hello, World!");',
  };

  const [codeValue, setCodeValue] = useState(
    defaultCodeSnippets[selectedLanguage]
  );

  function HandleEditorDidMount(editor, monaco) {
    EditorRef.current = editor;
  }
  useEffect(() => {
    // Validate is user has cleared tresure hunt
  }, []);

  function getEditvalue() {
    const UserCode = EditorRef.current.getValue();
    console.log(UserCode);
    const res = fetch("https://angry-moon-10536.pktriot.net/CodingRound", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserCode,
        CodeLanguage: selectedLanguage,
      }),
    }).then((response) => {
      console.log(response);
    });
  }

  // Function to update codeValue when the selected language changes
  function handleLanguageChange(language) {
    setSelectedLanguage(language);
    setCodeValue(defaultCodeSnippets[language]);
  }

  return (
    // <><h2>Rounds Yet to Start</h2></>)
    <div className="Main_Container">
       <div className="QuestionArea">
       <div dangerouslySetInnerHTML={{ __html: `
          <p>
          Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
<br/>
Return the decimal value of the number in the linked list.
<br/>

The most significant bit is at the head of the linked list.
<br/>
 

Example 1:
<br/>

Input: head = [1,0,1]
<br/>
Output: 5
<br/>
Explanation: (101) in base 2 = (5) in base 10
<br/>
Example 2:
<br/><br/>
Input: head = [0]<br/>
Output: 0<br/>
<br/><br/>

Constraints:<br/>
<br/>
The Linked List is not empty.<br/>
Number of nodes will not exceed 30.<br/>
Each node's value is either 0 or 1.<br/>
<p/>
        `}} />
        <iframe title="output" sandbox="allow-scripts" frameBorder="0" />
      </div>
      <div className="EditorArea">
        {/* Dropdown for selecting the programming language */}
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}>
          {/* <option value="Python">Python</option> */}
          <option value="C">C</option>
          <option value="CPP">C++</option>
          <option value="Js">JavaScript</option>
        </select>
        <Editior
          defaultLanguage={selectedLanguage}
          height="100vh"
          width="50vw"
          value={codeValue}
          onMount={HandleEditorDidMount}
          theme="vs-dark"
        />
        <button onClick={getEditvalue}>Submit Code</button>
      </div>
    </div>
  );
}
