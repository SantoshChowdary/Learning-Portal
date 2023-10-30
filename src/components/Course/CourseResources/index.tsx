import React, {useState} from 'react'
import { supabase } from '../../../supabase/supabase'
import Markdown from 'react-markdown';
import './index.css'

type courseResourceId = {
    activeUnitId : string | null
}

const CourseUnitResources = (props : courseResourceId) => {
  const {activeUnitId} = props

  return (
    <div className="course-unit-content">
        <Markdown>
            
            # My Markdown Document

                ## Table of Contents

                - [Introduction](#introduction)
                - [Features](#features)
                - [Installation](#installation)
                - [Usage](#usage)
                - [Conclusion](#conclusion)

                ## Introduction
                Welcome to my dummy Markdown document! This document is created to showcase some of the key features of Markdown formatting. Markdown is a lightweight markup language with plain-text-formatting syntax, often used for creating documents that can be easily converted to HTML.

                ## Features
                Markdown comes with a variety of features that make it a popular choice for creating documents. Some of its key features include:

                - **Simplicity:** Markdown's syntax is straightforward and easy to learn.
                - **Formatting:** It allows for basic text formatting, such as headers, emphasis, lists, and links.
                - **Compatibility:** Markdown files can be easily converted to HTML, making it versatile for web-based projects.
                - **Extensibility:** Markdown supports the use of HTML within the document, providing flexibility for more complex formatting.

                ## Installation
                To start using Markdown, you don't need to install anything! It's a simple text-based formatting language that can be written in any text editor. However, various text editors and integrated development environments (IDEs) offer Markdown support, providing features such as live preview and syntax highlighting.

                ## Usage
                Markdown can be used for various purposes, including:

                1. Creating documentation for software projects
                2. Writing blog posts and articles
                3. Formatting README files for GitHub repositories
                4. Taking notes in plain text

                ### Example of Markdown Syntax
                Here's an example of some basic Markdown syntax:

                - **Headers:**
            
        </Markdown>
    </div>
  )
}

export default CourseUnitResources