<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">import React, { useState } from 'react';</p>
<p class="p1">import { Check, X, FileText, Settings, Info, Award, ArrowRight } from 'lucide-react';</p>
<p class="p2"><br></p>
<p class="p1">// Quiz questions with weights and options</p>
<p class="p1">const quizQuestions = [</p>
<p class="p1"><span class="Apple-converted-space">  </span>{</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 1,</p>
<p class="p1"><span class="Apple-converted-space">    </span>question: "How frequently do your employees use computers or digital devices in their daily work?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'a', text: "Rarely or never", score: 0 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'b', text: "Some employees use them occasionally", score: 1 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'c', text: "Most employees use them regularly", score: 2 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'd', text: "All employees use them extensively", score: 3 }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p1"><span class="Apple-converted-space">    </span>weight: 3,</p>
<p class="p1"><span class="Apple-converted-space">    </span>category: "infrastructure"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>{</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 2,</p>
<p class="p1"><span class="Apple-converted-space">    </span>question: "Has anyone in your organization already started experimenting with AI tools (like ChatGPT) either personally or for work?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'a', text: "No, not at all", score: 0 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'b', text: "A few people have mentioned it, but no regular use", score: 1 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'c', text: "Some staff use it occasionally", score: 2 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'd', text: "Many staff use AI tools regularly", score: 3 }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p1"><span class="Apple-converted-space">    </span>weight: 2,</p>
<p class="p1"><span class="Apple-converted-space">    </span>category: "adoption"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>{</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 3,</p>
<p class="p1"><span class="Apple-converted-space">    </span>question: "How would you describe your business's documentation of processes and procedures?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'a', text: "We have very little documented", score: 0 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'b', text: "Some key processes are documented", score: 1 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'c', text: "Most of our processes are documented", score: 2 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'd', text: "We have comprehensive documentation", score: 3 }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p1"><span class="Apple-converted-space">    </span>weight: 2,</p>
<p class="p1"><span class="Apple-converted-space">    </span>category: "readiness"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>{</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 4,</p>
<p class="p1"><span class="Apple-converted-space">    </span>question: "How open is your leadership team to experimenting with new technologies?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'a', text: "Very resistant to change", score: 0 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'b', text: "Cautious about new technologies", score: 1 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'c', text: "Generally open to proven technologies", score: 2 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'd', text: "Actively encourages innovation and experimentation", score: 3 }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p1"><span class="Apple-converted-space">    </span>weight: 3,</p>
<p class="p1"><span class="Apple-converted-space">    </span>category: "culture"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>{</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 5,</p>
<p class="p1"><span class="Apple-converted-space">    </span>question: "Which best describes your current data management practices?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'a', text: "Our data is scattered across various systems with little organization", score: 0 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'b', text: "We have some data organization but it's not consistently managed", score: 1 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'c', text: "Most of our data is well-organized and accessible", score: 2 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'd', text: "We have centralized, well-structured data management systems", score: 3 }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p1"><span class="Apple-converted-space">    </span>weight: 3,</p>
<p class="p1"><span class="Apple-converted-space">    </span>category: "data"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>{</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 6,</p>
<p class="p1"><span class="Apple-converted-space">    </span>question: "How repetitive are the tasks in your business operations?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'a', text: "Almost no repetitive tasks", score: 0 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'b', text: "A few repetitive processes", score: 1 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'c', text: "Several key processes are repetitive", score: 2 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'd', text: "Many highly repetitive processes", score: 3 }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p1"><span class="Apple-converted-space">    </span>weight: 2,</p>
<p class="p1"><span class="Apple-converted-space">    </span>category: "opportunity"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>{</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 7,</p>
<p class="p1"><span class="Apple-converted-space">    </span>question: "Do you have a budget allocated for technology improvements?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'a', text: "No specific budget for technology", score: 0 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'b', text: "Minimal budget for critical updates only", score: 1 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'c', text: "Moderate budget for planned improvements", score: 2 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'd', text: "Significant budget for innovation and improvements", score: 3 }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p1"><span class="Apple-converted-space">    </span>weight: 2,</p>
<p class="p1"><span class="Apple-converted-space">    </span>category: "resources"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>{</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 8,</p>
<p class="p1"><span class="Apple-converted-space">    </span>question: "How would you rate your team's willingness to learn new tools and processes?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'a', text: "Generally resistant to learning new tools", score: 0 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'b', text: "Some are willing, others resistant", score: 1 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'c', text: "Most are open to learning new tools", score: 2 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'd', text: "Team actively seeks out new tools and skills", score: 3 }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p1"><span class="Apple-converted-space">    </span>weight: 2,</p>
<p class="p1"><span class="Apple-converted-space">    </span>category: "culture"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>{</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 9,</p>
<p class="p1"><span class="Apple-converted-space">    </span>question: "How important is increasing operational efficiency to your business goals this year?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'a', text: "Not a priority", score: 0 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'b', text: "Somewhat important", score: 1 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'c', text: "Important goal", score: 2 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'd', text: "Critical priority", score: 3 }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p1"><span class="Apple-converted-space">    </span>weight: 2,</p>
<p class="p1"><span class="Apple-converted-space">    </span>category: "readiness"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>{</p>
<p class="p1"><span class="Apple-converted-space">    </span>id: 10,</p>
<p class="p1"><span class="Apple-converted-space">    </span>question: "Do you have any technical staff who could lead AI implementation efforts?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'a', text: "No technical staff", score: 0 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'b', text: "Limited technical expertise in-house", score: 1 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'c', text: "Some technical staff who could possibly upskill", score: 2 },</p>
<p class="p1"><span class="Apple-converted-space">      </span>{ id: 'd', text: "Strong technical team capable of learning new technologies", score: 3 }</p>
<p class="p1"><span class="Apple-converted-space">    </span>],</p>
<p class="p1"><span class="Apple-converted-space">    </span>weight: 3,</p>
<p class="p1"><span class="Apple-converted-space">    </span>category: "resources"</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1">];</p>
<p class="p2"><br></p>
<p class="p1">// Categories with descriptions for the scorecard</p>
<p class="p1">const categories = {</p>
<p class="p1"><span class="Apple-converted-space">  </span>infrastructure: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "Technology Infrastructure",</p>
<p class="p1"><span class="Apple-converted-space">    </span>description: "How well your current technology setup supports AI adoption"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>adoption: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "Current AI Adoption",</p>
<p class="p1"><span class="Apple-converted-space">    </span>description: "Existing level of AI tool usage in your organization"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>readiness: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "Organizational Readiness",</p>
<p class="p1"><span class="Apple-converted-space">    </span>description: "How prepared your organization is for AI integration"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>culture: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "Innovation Culture",</p>
<p class="p1"><span class="Apple-converted-space">    </span>description: "Your team's openness to new technologies and change"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>data: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "Data Management",</p>
<p class="p1"><span class="Apple-converted-space">    </span>description: "How well your data is organized and accessible for AI use"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>opportunity: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "AI Opportunity",</p>
<p class="p1"><span class="Apple-converted-space">    </span>description: "The potential value AI could bring to your business processes"</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>resources: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "Available Resources",</p>
<p class="p1"><span class="Apple-converted-space">    </span>description: "The budget and people resources available for AI initiatives"</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">// Recommendations based on score ranges</p>
<p class="p1">const recommendations = {</p>
<p class="p1"><span class="Apple-converted-space">  </span>low: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "Foundation Building",</p>
<p class="p1"><span class="Apple-converted-space">    </span>points: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Start with basic AI tools like ChatGPT that require minimal setup",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Identify one repetitive task for a small proof-of-concept",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Designate an AI champion to explore opportunities",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Consider basic digital transformation steps before complex AI",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Focus on organizing your data and documentation"</p>
<p class="p1"><span class="Apple-converted-space">    </span>]</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>medium: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "Strategic Adoption",</p>
<p class="p1"><span class="Apple-converted-space">    </span>points: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Implement AI in departments already showing interest",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Create an AI experimentation budget",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Develop an AI roadmap prioritizing high-impact areas",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Consider tools that integrate with your existing systems",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Begin training programs to build internal AI capabilities"</p>
<p class="p1"><span class="Apple-converted-space">    </span>]</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>high: {</p>
<p class="p1"><span class="Apple-converted-space">    </span>title: "Advanced Integration",</p>
<p class="p1"><span class="Apple-converted-space">    </span>points: [</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Explore custom AI solutions for your specific business needs",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Consider establishing an innovation team focused on AI",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Implement regular AI tool evaluation processes",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Look into industry-specific AI applications",</p>
<p class="p1"><span class="Apple-converted-space">      </span>"Develop metrics to track AI implementation success"</p>
<p class="p1"><span class="Apple-converted-space">    </span>]</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">// Calculate max possible score for percentage calculation</p>
<p class="p1">const calculateMaxScore = () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>return quizQuestions.reduce((total, q) =&gt; total + (3 * q.weight), 0);</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">const maxPossibleScore = calculateMaxScore();</p>
<p class="p2"><br></p>
<p class="p1">// Control Panel Component</p>
<p class="p1">const ControlPanel = ({ weights, setWeights, setView }) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>const [localWeights, setLocalWeights] = useState({...weights});</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>const handleWeightChange = (questionId, newWeight) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>setLocalWeights({</p>
<p class="p1"><span class="Apple-converted-space">      </span>...localWeights,</p>
<p class="p1"><span class="Apple-converted-space">      </span>[questionId]: parseInt(newWeight)</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>const saveChanges = () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>setWeights(localWeights);</p>
<p class="p1"><span class="Apple-converted-space">    </span>setView('quiz');</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>return (</p>
<p class="p1"><span class="Apple-converted-space">    </span>&lt;div className="bg-white rounded-lg shadow-lg p-6 mb-8"&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;div className="flex items-center justify-between mb-6"&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;h2 className="text-2xl font-bold"&gt;Quiz Configuration&lt;/h2&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;button<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>onClick={saveChanges}</p>
<p class="p1"><span class="Apple-converted-space">          </span>className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"</p>
<p class="p1"><span class="Apple-converted-space">        </span>&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>Save Changes</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;/button&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">      </span></p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;div className="mb-6"&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;h3 className="text-lg font-semibold mb-2"&gt;Question Weights&lt;/h3&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;p className="text-gray-600 mb-4"&gt;Adjust the importance of each question in the final score calculation.&lt;/p&gt;</p>
<p class="p2"><span class="Apple-converted-space">        </span></p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;div className="space-y-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>{quizQuestions.map(question =&gt; (</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;div key={question.id} className="border p-4 rounded-md"&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;p className="font-medium mb-2"&gt;Q{question.id}: {question.question}&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;div className="flex items-center"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;label className="mr-2"&gt;Weight:&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;select<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                  </span>value={localWeights[question.id]}<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                  </span>onChange={(e) =&gt; handleWeightChange(question.id, e.target.value)}</p>
<p class="p1"><span class="Apple-converted-space">                  </span>className="border rounded-md px-2 py-1"</p>
<p class="p1"><span class="Apple-converted-space">                </span>&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;option value="1"&gt;1 - Low importance&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;option value="2"&gt;2 - Medium importance&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;option value="3"&gt;3 - High importance&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/select&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;p className="text-sm text-gray-500 mt-2"&gt;Category: {categories[question.category].title}&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>))}</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">    </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">  </span>);</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">// Main Quiz Component</p>
<p class="p1">const AIReadinessQuiz = () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>const [currentQuestion, setCurrentQuestion] = useState(0);</p>
<p class="p1"><span class="Apple-converted-space">  </span>const [answers, setAnswers] = useState({});</p>
<p class="p1"><span class="Apple-converted-space">  </span>const [view, setView] = useState('intro'); // intro, quiz, results, control</p>
<p class="p1"><span class="Apple-converted-space">  </span>const [contactInfo, setContactInfo] = useState({<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>name: '',<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>email: '',<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>phone: '',</p>
<p class="p1"><span class="Apple-converted-space">    </span>company: '',<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>website: '',</p>
<p class="p1"><span class="Apple-converted-space">    </span>position: '',</p>
<p class="p1"><span class="Apple-converted-space">    </span>industry: '',</p>
<p class="p1"><span class="Apple-converted-space">    </span>size: ''<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>const [weights, setWeights] = useState(</p>
<p class="p1"><span class="Apple-converted-space">    </span>quizQuestions.reduce((acc, q) =&gt; ({...acc, [q.id]: q.weight}), {})</p>
<p class="p1"><span class="Apple-converted-space">  </span>);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// Handle answer selection</p>
<p class="p1"><span class="Apple-converted-space">  </span>const handleAnswer = (questionId, option) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>setAnswers({</p>
<p class="p1"><span class="Apple-converted-space">      </span>...answers,</p>
<p class="p1"><span class="Apple-converted-space">      </span>[questionId]: option</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>if (currentQuestion &lt; quizQuestions.length - 1) {</p>
<p class="p1"><span class="Apple-converted-space">      </span>setCurrentQuestion(currentQuestion + 1);</p>
<p class="p1"><span class="Apple-converted-space">    </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">      </span>setView('contact');</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// Handle contact form input changes</p>
<p class="p1"><span class="Apple-converted-space">  </span>const handleContactChange = (e) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const { name, value } = e.target;</p>
<p class="p1"><span class="Apple-converted-space">    </span>setContactInfo({</p>
<p class="p1"><span class="Apple-converted-space">      </span>...contactInfo,</p>
<p class="p1"><span class="Apple-converted-space">      </span>[name]: value</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// Handle contact form submission</p>
<p class="p1"><span class="Apple-converted-space">  </span>const handleContactSubmit = (e) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>e.preventDefault();</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Calculate scores for webhook submission</p>
<p class="p1"><span class="Apple-converted-space">    </span>const scores = calculateScores();</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Send data to Make webhook</p>
<p class="p1"><span class="Apple-converted-space">    </span>fetch('https://hook.us2.make.com/jhcnpaf3pmoed2n5hxo51dvvfwlvze1u', {</p>
<p class="p1"><span class="Apple-converted-space">      </span>method: 'POST',</p>
<p class="p1"><span class="Apple-converted-space">      </span>headers: {</p>
<p class="p1"><span class="Apple-converted-space">        </span>'Content-Type': 'application/json',</p>
<p class="p1"><span class="Apple-converted-space">      </span>},</p>
<p class="p1"><span class="Apple-converted-space">      </span>body: JSON.stringify({</p>
<p class="p1"><span class="Apple-converted-space">        </span>contact: contactInfo,</p>
<p class="p1"><span class="Apple-converted-space">        </span>quizResults: {</p>
<p class="p1"><span class="Apple-converted-space">          </span>scores: scores,</p>
<p class="p1"><span class="Apple-converted-space">          </span>answers: answers,</p>
<p class="p1"><span class="Apple-converted-space">          </span>overallScore: scores.overallScore</p>
<p class="p1"><span class="Apple-converted-space">        </span>},</p>
<p class="p1"><span class="Apple-converted-space">        </span>timestamp: new Date().toISOString()</p>
<p class="p1"><span class="Apple-converted-space">      </span>})</p>
<p class="p1"><span class="Apple-converted-space">    </span>})</p>
<p class="p1"><span class="Apple-converted-space">    </span>.then(response =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">      </span>console.log('Webhook submission successful');</p>
<p class="p1"><span class="Apple-converted-space">      </span>// Continue to results page after successful submission</p>
<p class="p1"><span class="Apple-converted-space">      </span>setView('results');</p>
<p class="p1"><span class="Apple-converted-space">    </span>})</p>
<p class="p1"><span class="Apple-converted-space">    </span>.catch(error =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">      </span>console.error('Error submitting to webhook:', error);</p>
<p class="p1"><span class="Apple-converted-space">      </span>// Still show results even if webhook fails</p>
<p class="p1"><span class="Apple-converted-space">      </span>setView('results');</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// Calculate scores by category and overall</p>
<p class="p1"><span class="Apple-converted-space">  </span>const calculateScores = () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>// Initialize scores object with all categories at 0</p>
<p class="p1"><span class="Apple-converted-space">    </span>const scores = Object.keys(categories).reduce((acc, cat) =&gt; ({...acc, [cat]: 0}), {});</p>
<p class="p1"><span class="Apple-converted-space">    </span>const maxCategoryScores = Object.keys(categories).reduce((acc, cat) =&gt; ({...acc, [cat]: 0}), {});</p>
<p class="p1"><span class="Apple-converted-space">    </span>let totalScore = 0;</p>
<p class="p1"><span class="Apple-converted-space">    </span>let totalWeight = 0;</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Calculate scores for each category and overall</p>
<p class="p1"><span class="Apple-converted-space">    </span>quizQuestions.forEach(q =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">      </span>const weight = weights[q.id] || q.weight;</p>
<p class="p1"><span class="Apple-converted-space">      </span>const answer = answers[q.id];</p>
<p class="p2"><span class="Apple-converted-space">      </span></p>
<p class="p1"><span class="Apple-converted-space">      </span>if (answer) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>// Add to category score</p>
<p class="p1"><span class="Apple-converted-space">        </span>scores[q.category] += answer.score * weight;</p>
<p class="p1"><span class="Apple-converted-space">        </span>maxCategoryScores[q.category] += 3 * weight; // Max possible score for this question</p>
<p class="p2"><span class="Apple-converted-space">        </span></p>
<p class="p1"><span class="Apple-converted-space">        </span>// Add to total score</p>
<p class="p1"><span class="Apple-converted-space">        </span>totalScore += answer.score * weight;</p>
<p class="p1"><span class="Apple-converted-space">        </span>totalWeight += weight;</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Calculate percentages for each category</p>
<p class="p1"><span class="Apple-converted-space">    </span>const percentages = {};</p>
<p class="p1"><span class="Apple-converted-space">    </span>Object.keys(scores).forEach(cat =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">      </span>if (maxCategoryScores[cat] &gt; 0) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>percentages[cat] = Math.round((scores[cat] / maxCategoryScores[cat]) * 100);</p>
<p class="p1"><span class="Apple-converted-space">      </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">        </span>percentages[cat] = 0;</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Calculate overall percentage</p>
<p class="p1"><span class="Apple-converted-space">    </span>const overallPercentage = Math.round((totalScore / (totalWeight * 3)) * 100);</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>return {</p>
<p class="p1"><span class="Apple-converted-space">      </span>categoryScores: percentages,</p>
<p class="p1"><span class="Apple-converted-space">      </span>overallScore: overallPercentage</p>
<p class="p1"><span class="Apple-converted-space">    </span>};</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// Get recommendation based on score</p>
<p class="p1"><span class="Apple-converted-space">  </span>const getRecommendation = (score) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (score &lt; 40) return recommendations.low;</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (score &lt; 75) return recommendations.medium;</p>
<p class="p1"><span class="Apple-converted-space">    </span>return recommendations.high;</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// Calculate the final scores</p>
<p class="p1"><span class="Apple-converted-space">  </span>const scores = view === 'results' ? calculateScores() : null;</p>
<p class="p1"><span class="Apple-converted-space">  </span>const recommendation = scores ? getRecommendation(scores.overallScore) : null;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// Progress percentage for the quiz</p>
<p class="p1"><span class="Apple-converted-space">  </span>const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>return (</p>
<p class="p1"><span class="Apple-converted-space">    </span>&lt;div className="max-w-3xl mx-auto p-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>{/* Admin Control Button - Only visible to admins in a real implementation */}</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;div className="flex justify-end mb-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>{view !== 'control' &amp;&amp; (</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;button<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>onClick={() =&gt; setView('control')}</p>
<p class="p1"><span class="Apple-converted-space">            </span>className="flex items-center text-sm text-gray-600 hover:text-gray-800"</p>
<p class="p1"><span class="Apple-converted-space">          </span>&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;Settings size={16} className="mr-1" /&gt; Admin Controls</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/button&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>)}</p>
<p class="p1"><span class="Apple-converted-space">        </span>{view === 'control' &amp;&amp; (</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;button<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>onClick={() =&gt; setView('intro')}</p>
<p class="p1"><span class="Apple-converted-space">            </span>className="flex items-center text-sm text-gray-600 hover:text-gray-800"</p>
<p class="p1"><span class="Apple-converted-space">          </span>&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;ArrowRight size={16} className="mr-1" /&gt; Back to Quiz</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/button&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>)}</p>
<p class="p1"><span class="Apple-converted-space">      </span>&lt;/div&gt;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>{/* Control Panel View */}</p>
<p class="p1"><span class="Apple-converted-space">      </span>{view === 'control' &amp;&amp; (</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;ControlPanel<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>weights={weights}<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>setWeights={setWeights}<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>setView={setView}<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">        </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>)}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>{/* Introduction View */}</p>
<p class="p1"><span class="Apple-converted-space">      </span>{view === 'intro' &amp;&amp; (</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;div className="bg-white rounded-lg shadow-lg p-6 mb-8"&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;h1 className="text-2xl font-bold mb-4"&gt;AI Readiness Assessment&lt;/h1&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;p className="mb-4"&gt;Find out how prepared your business is to leverage artificial intelligence technologies and get personalized recommendations to accelerate your AI journey.&lt;/p&gt;</p>
<p class="p2"><span class="Apple-converted-space">          </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;div className="mb-6"&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;h2 className="text-lg font-semibold mb-2"&gt;What You'll Learn:&lt;/h2&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;ul className="space-y-2"&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;li className="flex items-start"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" /&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;span&gt;Your organization's AI readiness score across key dimensions&lt;/span&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/li&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;li className="flex items-start"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" /&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;span&gt;Specific areas where you're well-positioned for AI adoption&lt;/span&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/li&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;li className="flex items-start"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" /&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;span&gt;Tailored recommendations for your next steps&lt;/span&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/li&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;li className="flex items-start"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" /&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;span&gt;Comparison to similar businesses in your industry&lt;/span&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/li&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/ul&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">          </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;div&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;h2 className="text-lg font-semibold mb-2"&gt;How It Works:&lt;/h2&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;p className="mb-2"&gt;This quick assessment takes about 3 minutes to complete. You'll answer 10 simple questions about your current business operations and technology usage.&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">          </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;button<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>onClick={() =&gt; setView('quiz')}</p>
<p class="p1"><span class="Apple-converted-space">            </span>className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full md:w-auto"</p>
<p class="p1"><span class="Apple-converted-space">          </span>&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>Start Assessment</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/button&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>)}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>{/* Quiz View */}</p>
<p class="p1"><span class="Apple-converted-space">      </span>{view === 'quiz' &amp;&amp; (</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;div className="bg-white rounded-lg shadow-lg p-6"&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>{/* Progress bar */}</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;div className="mb-6"&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;div className="w-full bg-gray-200 rounded-full h-2.5"&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;div<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>className="bg-blue-600 h-2.5 rounded-full"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>style={{ width: `${progress}%` }}</p>
<p class="p1"><span class="Apple-converted-space">              </span>&gt;&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;p className="text-sm text-gray-500 mt-2"&gt;Question {currentQuestion + 1} of {quizQuestions.length}&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">          </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>{/* Question */}</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;h2 className="text-xl font-semibold mb-4"&gt;{quizQuestions[currentQuestion].question}&lt;/h2&gt;</p>
<p class="p2"><span class="Apple-converted-space">          </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>{/* Options */}</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;div className="space-y-3"&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>{quizQuestions[currentQuestion].options.map(option =&gt; (</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;button</p>
<p class="p1"><span class="Apple-converted-space">                </span>key={option.id}</p>
<p class="p1"><span class="Apple-converted-space">                </span>onClick={() =&gt; handleAnswer(quizQuestions[currentQuestion].id, option)}</p>
<p class="p1"><span class="Apple-converted-space">                </span>className="w-full text-left p-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"</p>
<p class="p1"><span class="Apple-converted-space">              </span>&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>{option.text}</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/button&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>))}</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>)}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>{/* Contact Information View */}</p>
<p class="p1"><span class="Apple-converted-space">      </span>{view === 'contact' &amp;&amp; (</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;div className="bg-white rounded-lg shadow-lg p-6"&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;h2 className="text-xl font-bold mb-4"&gt;Almost Done!&lt;/h2&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;p className="mb-4"&gt;Please provide your information to receive your personalized AI readiness scorecard.&lt;/p&gt;</p>
<p class="p2"><span class="Apple-converted-space">          </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;form onSubmit={handleContactSubmit}&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;div className="space-y-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;div className="grid grid-cols-1 md:grid-cols-2 gap-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"&gt;Full Name*&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;input</p>
<p class="p1"><span class="Apple-converted-space">                    </span>type="text"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>id="name"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>name="name"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>value={contactInfo.name}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>onChange={handleContactChange}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>required</p>
<p class="p1"><span class="Apple-converted-space">                    </span>className="w-full p-2 border border-gray-300 rounded-md"</p>
<p class="p1"><span class="Apple-converted-space">                  </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">                </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1"&gt;Position/Job Title*&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;input</p>
<p class="p1"><span class="Apple-converted-space">                    </span>type="text"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>id="position"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>name="position"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>value={contactInfo.position}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>onChange={handleContactChange}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>required</p>
<p class="p1"><span class="Apple-converted-space">                    </span>className="w-full p-2 border border-gray-300 rounded-md"</p>
<p class="p1"><span class="Apple-converted-space">                  </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">              </span></p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;div className="grid grid-cols-1 md:grid-cols-2 gap-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"&gt;Work Email*&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;input</p>
<p class="p1"><span class="Apple-converted-space">                    </span>type="email"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>id="email"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>name="email"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>value={contactInfo.email}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>onChange={handleContactChange}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>required</p>
<p class="p1"><span class="Apple-converted-space">                    </span>className="w-full p-2 border border-gray-300 rounded-md"</p>
<p class="p1"><span class="Apple-converted-space">                  </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">                </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1"&gt;Phone Number*&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;input</p>
<p class="p1"><span class="Apple-converted-space">                    </span>type="tel"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>id="phone"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>name="phone"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>value={contactInfo.phone}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>onChange={handleContactChange}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>required</p>
<p class="p1"><span class="Apple-converted-space">                    </span>className="w-full p-2 border border-gray-300 rounded-md"</p>
<p class="p1"><span class="Apple-converted-space">                  </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">              </span></p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;div className="grid grid-cols-1 md:grid-cols-2 gap-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1"&gt;Company Name*&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;input</p>
<p class="p1"><span class="Apple-converted-space">                    </span>type="text"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>id="company"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>name="company"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>value={contactInfo.company}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>onChange={handleContactChange}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>required</p>
<p class="p1"><span class="Apple-converted-space">                    </span>className="w-full p-2 border border-gray-300 rounded-md"</p>
<p class="p1"><span class="Apple-converted-space">                  </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">                </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1"&gt;Company Website&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;input</p>
<p class="p1"><span class="Apple-converted-space">                    </span>type="url"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>id="website"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>name="website"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>placeholder="https://"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>value={contactInfo.website}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>onChange={handleContactChange}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>className="w-full p-2 border border-gray-300 rounded-md"</p>
<p class="p1"><span class="Apple-converted-space">                  </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">              </span></p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;div className="grid grid-cols-1 md:grid-cols-2 gap-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1"&gt;Industry*&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;select</p>
<p class="p1"><span class="Apple-converted-space">                    </span>id="industry"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>name="industry"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>value={contactInfo.industry}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>onChange={handleContactChange}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>required</p>
<p class="p1"><span class="Apple-converted-space">                    </span>className="w-full p-2 border border-gray-300 rounded-md"</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value=""&gt;Select your industry&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Technology"&gt;Technology&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Healthcare"&gt;Healthcare&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Finance"&gt;Finance &amp; Banking&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Manufacturing"&gt;Manufacturing&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Retail"&gt;Retail &amp; E-commerce&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Education"&gt;Education&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Professional Services"&gt;Professional Services&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Media"&gt;Media &amp; Entertainment&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Real Estate"&gt;Real Estate&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Hospitality"&gt;Hospitality &amp; Travel&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Construction"&gt;Construction&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="Other"&gt;Other&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;/select&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">                </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1"&gt;Company Size*&lt;/label&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;select</p>
<p class="p1"><span class="Apple-converted-space">                    </span>id="size"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>name="size"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>value={contactInfo.size}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>onChange={handleContactChange}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>required</p>
<p class="p1"><span class="Apple-converted-space">                    </span>className="w-full p-2 border border-gray-300 rounded-md"</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value=""&gt;Select company size&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="1-10"&gt;1-10 employees&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="11-50"&gt;11-50 employees&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="51-200"&gt;51-200 employees&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="201-500"&gt;201-500 employees&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;option value="501+"&gt;501+ employees&lt;/option&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;/select&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">            </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;div className="mt-4 text-sm text-gray-500"&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;p&gt;* Required fields&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">            </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;button<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">              </span>type="submit"</p>
<p class="p1"><span class="Apple-converted-space">              </span>className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full"</p>
<p class="p1"><span class="Apple-converted-space">            </span>&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>Get My Results</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/button&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/form&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>)}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>{/* Results View */}</p>
<p class="p1"><span class="Apple-converted-space">      </span>{view === 'results' &amp;&amp; scores &amp;&amp; (</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;div className="bg-white rounded-lg shadow-lg p-6"&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;div className="text-center mb-8"&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;h1 className="text-2xl font-bold mb-2"&gt;Your AI Readiness Score&lt;/h1&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;div className="inline-flex items-center justify-center"&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;div className="relative w-32 h-32"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;svg className="w-full h-full" viewBox="0 0 100 100"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;circle<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>className="text-gray-200"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>strokeWidth="10"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>stroke="currentColor"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>fill="transparent"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>r="45"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>cx="50"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>cy="50"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                  </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;circle<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>className="text-blue-600"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>strokeWidth="10"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>strokeDasharray={`${2 * Math.PI * 45}`}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>strokeDashoffset={`${2 * Math.PI * 45 * (1 - scores.overallScore / 100)}`}</p>
<p class="p1"><span class="Apple-converted-space">                    </span>strokeLinecap="round"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>stroke="currentColor"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>fill="transparent"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>r="45"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>cx="50"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>cy="50"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                  </span>/&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/svg&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;span className="text-3xl font-bold"&gt;{scores.overallScore}%&lt;/span&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">            </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;p className="mt-4 text-lg"&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>{scores.overallScore &lt; 40 ? "Getting Started" :<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">               </span>scores.overallScore &lt; 75 ? "Building Momentum" :<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">               </span>"Ready for Advanced AI"}</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">          </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>{/* Category breakdown */}</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;div className="mb-8"&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;h2 className="text-xl font-semibold mb-4"&gt;Readiness by Category&lt;/h2&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;div className="space-y-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>{Object.keys(categories).map(categoryKey =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">                </span>const category = categories[categoryKey];</p>
<p class="p1"><span class="Apple-converted-space">                </span>const score = scores.categoryScores[categoryKey] || 0;</p>
<p class="p2"><span class="Apple-converted-space">                </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>return (</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;div key={categoryKey} className="border p-4 rounded-md"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;div className="flex justify-between items-center mb-2"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                      </span>&lt;h3 className="font-medium"&gt;{category.title}&lt;/h3&gt;</p>
<p class="p1"><span class="Apple-converted-space">                      </span>&lt;span className="font-bold"&gt;{score}%&lt;/span&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;p className="text-sm text-gray-600 mb-2"&gt;{category.description}&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;div className="w-full bg-gray-200 rounded-full h-2"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                      </span>&lt;div<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>className={`h-2 rounded-full ${</p>
<p class="p1"><span class="Apple-converted-space">                          </span>score &lt; 40 ? "bg-red-500" :<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                          </span>score &lt; 75 ? "bg-yellow-500" :<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                          </span>"bg-green-500"</p>
<p class="p1"><span class="Apple-converted-space">                        </span>}`}</p>
<p class="p1"><span class="Apple-converted-space">                        </span>style={{ width: `${score}%` }}</p>
<p class="p1"><span class="Apple-converted-space">                      </span>&gt;&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>);</p>
<p class="p1"><span class="Apple-converted-space">              </span>})}</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/div&gt;</p>
<p class="p2"><span class="Apple-converted-space">          </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>{/* Recommendations */}</p>
<p class="p1"><span class="Apple-converted-space">          </span>{recommendation &amp;&amp; (</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;div className="mb-8"&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;h2 className="text-xl font-semibold mb-4"&gt;Recommended Next Steps&lt;/h2&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;div className="bg-blue-50 border border-blue-200 rounded-md p-4"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;h3 className="font-medium text-blue-800 mb-3"&gt;{recommendation.title}&lt;/h3&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;ul className="space-y-2"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>{recommendation.points.map((point, index) =&gt; (</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;li key={index} className="flex items-start"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                      </span>&lt;ArrowRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" /&gt;</p>
<p class="p1"><span class="Apple-converted-space">                      </span>&lt;span&gt;{point}&lt;/span&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;/li&gt;</p>
<p class="p1"><span class="Apple-converted-space">                  </span>))}</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/ul&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>)}</p>
<p class="p2"><span class="Apple-converted-space">          </span></p>
<p class="p1"><span class="Apple-converted-space">          </span>{/* CTA */}</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;div className="bg-gray-50 p-4 rounded-md text-center"&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;h3 className="font-semibold mb-2"&gt;Want a detailed consultation on your AI readiness?&lt;/h3&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;p className="mb-4"&gt;Our AI specialists can help you develop a tailored roadmap for your business.&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"&gt;</p>
<p class="p1"><span class="Apple-converted-space">              </span>Schedule a Free Consultation</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/button&gt;</p>
<p class="p1"><span class="Apple-converted-space">          </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">      </span>)}</p>
<p class="p1"><span class="Apple-converted-space">    </span>&lt;/div&gt;</p>
<p class="p1"><span class="Apple-converted-space">  </span>);</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">export default AIReadinessQuiz;</p>
</body>
</html>
