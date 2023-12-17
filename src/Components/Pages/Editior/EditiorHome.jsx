import React, { useRef, useEffect, useState } from "react";
import Editior from "@monaco-editor/react";
import "./EditiorHome.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

export default function EditiorHome() {
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
  const Server_host = 'https://logica-server.onrender.com'

  function getEditvalue() {
    const UserCode = EditorRef.current.getValue();
    console.log(UserCode);
    const res = fetch(Server_host+"/CodingRound", {
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
            Question: Given an input string 's' and a pattern 'p', implement
            regular expression matching with support for the following special
            characters:
          </p>
          <ul>
            <li>'.' Matches any single character.</li>
            <li>'*' Matches zero or more occurrences of the preceding element.</li>
          </ul>
          You need to determine whether the pattern 'p' matches the entire input
          string 's'. If it matches completely, return 'true'; otherwise, return
          'false'. Examples:
          <ol>
            <li>For 's = "aa"' and 'p = "a"', the output should be 'false'.</li>
            <li>
              For 's = "aa"' and 'p = "a*"', the output should be 'true'.
            </li>
            <li>
              For 's = "ab"' and 'p = ".*"', the output should be 'true'.
            </li>
          </ol>
          Constraints:
          <ul>
            <li>1 <= |s| <= 20, where |s| is the length of string 's'.</li>
            <li>1 <= |p| <= 20, where |p| is the length of pattern 'p'.</li>
            <li>String 's' contains only lowercase English letters.</li>
            <li>
              Pattern 'p' contains only lowercase English letters, '.', and '*'.
            </li>
            <li>
              It is guaranteed that for each appearance of the character '*',
              there will be a previous valid character to match.
            </li>
            <li>
              The algorithm's time complexity should be O(|s| * |p|) or better.
            </li>
          </ul>
          
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
