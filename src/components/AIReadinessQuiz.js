{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState \} from 'react';\
import \{ Check, X, FileText, Settings, Info, Award, ArrowRight \} from 'lucide-react';\
\
// Quiz questions with weights and options\
const quizQuestions = [\
  \{\
    id: 1,\
    question: "How frequently do your employees use computers or digital devices in their daily work?",\
    options: [\
      \{ id: 'a', text: "Rarely or never", score: 0 \},\
      \{ id: 'b', text: "Some employees use them occasionally", score: 1 \},\
      \{ id: 'c', text: "Most employees use them regularly", score: 2 \},\
      \{ id: 'd', text: "All employees use them extensively", score: 3 \}\
    ],\
    weight: 3,\
    category: "infrastructure"\
  \},\
  \{\
    id: 2,\
    question: "Has anyone in your organization already started experimenting with AI tools (like ChatGPT) either personally or for work?",\
    options: [\
      \{ id: 'a', text: "No, not at all", score: 0 \},\
      \{ id: 'b', text: "A few people have mentioned it, but no regular use", score: 1 \},\
      \{ id: 'c', text: "Some staff use it occasionally", score: 2 \},\
      \{ id: 'd', text: "Many staff use AI tools regularly", score: 3 \}\
    ],\
    weight: 2,\
    category: "adoption"\
  \},\
  \{\
    id: 3,\
    question: "How would you describe your business's documentation of processes and procedures?",\
    options: [\
      \{ id: 'a', text: "We have very little documented", score: 0 \},\
      \{ id: 'b', text: "Some key processes are documented", score: 1 \},\
      \{ id: 'c', text: "Most of our processes are documented", score: 2 \},\
      \{ id: 'd', text: "We have comprehensive documentation", score: 3 \}\
    ],\
    weight: 2,\
    category: "readiness"\
  \},\
  \{\
    id: 4,\
    question: "How open is your leadership team to experimenting with new technologies?",\
    options: [\
      \{ id: 'a', text: "Very resistant to change", score: 0 \},\
      \{ id: 'b', text: "Cautious about new technologies", score: 1 \},\
      \{ id: 'c', text: "Generally open to proven technologies", score: 2 \},\
      \{ id: 'd', text: "Actively encourages innovation and experimentation", score: 3 \}\
    ],\
    weight: 3,\
    category: "culture"\
  \},\
  \{\
    id: 5,\
    question: "Which best describes your current data management practices?",\
    options: [\
      \{ id: 'a', text: "Our data is scattered across various systems with little organization", score: 0 \},\
      \{ id: 'b', text: "We have some data organization but it's not consistently managed", score: 1 \},\
      \{ id: 'c', text: "Most of our data is well-organized and accessible", score: 2 \},\
      \{ id: 'd', text: "We have centralized, well-structured data management systems", score: 3 \}\
    ],\
    weight: 3,\
    category: "data"\
  \},\
  \{\
    id: 6,\
    question: "How repetitive are the tasks in your business operations?",\
    options: [\
      \{ id: 'a', text: "Almost no repetitive tasks", score: 0 \},\
      \{ id: 'b', text: "A few repetitive processes", score: 1 \},\
      \{ id: 'c', text: "Several key processes are repetitive", score: 2 \},\
      \{ id: 'd', text: "Many highly repetitive processes", score: 3 \}\
    ],\
    weight: 2,\
    category: "opportunity"\
  \},\
  \{\
    id: 7,\
    question: "Do you have a budget allocated for technology improvements?",\
    options: [\
      \{ id: 'a', text: "No specific budget for technology", score: 0 \},\
      \{ id: 'b', text: "Minimal budget for critical updates only", score: 1 \},\
      \{ id: 'c', text: "Moderate budget for planned improvements", score: 2 \},\
      \{ id: 'd', text: "Significant budget for innovation and improvements", score: 3 \}\
    ],\
    weight: 2,\
    category: "resources"\
  \},\
  \{\
    id: 8,\
    question: "How would you rate your team's willingness to learn new tools and processes?",\
    options: [\
      \{ id: 'a', text: "Generally resistant to learning new tools", score: 0 \},\
      \{ id: 'b', text: "Some are willing, others resistant", score: 1 \},\
      \{ id: 'c', text: "Most are open to learning new tools", score: 2 \},\
      \{ id: 'd', text: "Team actively seeks out new tools and skills", score: 3 \}\
    ],\
    weight: 2,\
    category: "culture"\
  \},\
  \{\
    id: 9,\
    question: "How important is increasing operational efficiency to your business goals this year?",\
    options: [\
      \{ id: 'a', text: "Not a priority", score: 0 \},\
      \{ id: 'b', text: "Somewhat important", score: 1 \},\
      \{ id: 'c', text: "Important goal", score: 2 \},\
      \{ id: 'd', text: "Critical priority", score: 3 \}\
    ],\
    weight: 2,\
    category: "readiness"\
  \},\
  \{\
    id: 10,\
    question: "Do you have any technical staff who could lead AI implementation efforts?",\
    options: [\
      \{ id: 'a', text: "No technical staff", score: 0 \},\
      \{ id: 'b', text: "Limited technical expertise in-house", score: 1 \},\
      \{ id: 'c', text: "Some technical staff who could possibly upskill", score: 2 \},\
      \{ id: 'd', text: "Strong technical team capable of learning new technologies", score: 3 \}\
    ],\
    weight: 3,\
    category: "resources"\
  \}\
];\
\
// Categories with descriptions for the scorecard\
const categories = \{\
  infrastructure: \{\
    title: "Technology Infrastructure",\
    description: "How well your current technology setup supports AI adoption"\
  \},\
  adoption: \{\
    title: "Current AI Adoption",\
    description: "Existing level of AI tool usage in your organization"\
  \},\
  readiness: \{\
    title: "Organizational Readiness",\
    description: "How prepared your organization is for AI integration"\
  \},\
  culture: \{\
    title: "Innovation Culture",\
    description: "Your team's openness to new technologies and change"\
  \},\
  data: \{\
    title: "Data Management",\
    description: "How well your data is organized and accessible for AI use"\
  \},\
  opportunity: \{\
    title: "AI Opportunity",\
    description: "The potential value AI could bring to your business processes"\
  \},\
  resources: \{\
    title: "Available Resources",\
    description: "The budget and people resources available for AI initiatives"\
  \}\
\};\
\
// Recommendations based on score ranges\
const recommendations = \{\
  low: \{\
    title: "Foundation Building",\
    points: [\
      "Start with basic AI tools like ChatGPT that require minimal setup",\
      "Identify one repetitive task for a small proof-of-concept",\
      "Designate an AI champion to explore opportunities",\
      "Consider basic digital transformation steps before complex AI",\
      "Focus on organizing your data and documentation"\
    ]\
  \},\
  medium: \{\
    title: "Strategic Adoption",\
    points: [\
      "Implement AI in departments already showing interest",\
      "Create an AI experimentation budget",\
      "Develop an AI roadmap prioritizing high-impact areas",\
      "Consider tools that integrate with your existing systems",\
      "Begin training programs to build internal AI capabilities"\
    ]\
  \},\
  high: \{\
    title: "Advanced Integration",\
    points: [\
      "Explore custom AI solutions for your specific business needs",\
      "Consider establishing an innovation team focused on AI",\
      "Implement regular AI tool evaluation processes",\
      "Look into industry-specific AI applications",\
      "Develop metrics to track AI implementation success"\
    ]\
  \}\
\};\
\
// Calculate max possible score for percentage calculation\
const calculateMaxScore = () => \{\
  return quizQuestions.reduce((total, q) => total + (3 * q.weight), 0);\
\};\
\
const maxPossibleScore = calculateMaxScore();\
\
// Control Panel Component\
const ControlPanel = (\{ weights, setWeights, setView \}) => \{\
  const [localWeights, setLocalWeights] = useState(\{...weights\});\
  \
  const handleWeightChange = (questionId, newWeight) => \{\
    setLocalWeights(\{\
      ...localWeights,\
      [questionId]: parseInt(newWeight)\
    \});\
  \};\
  \
  const saveChanges = () => \{\
    setWeights(localWeights);\
    setView('quiz');\
  \};\
  \
  return (\
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">\
      <div className="flex items-center justify-between mb-6">\
        <h2 className="text-2xl font-bold">Quiz Configuration</h2>\
        <button \
          onClick=\{saveChanges\}\
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"\
        >\
          Save Changes\
        </button>\
      </div>\
      \
      <div className="mb-6">\
        <h3 className="text-lg font-semibold mb-2">Question Weights</h3>\
        <p className="text-gray-600 mb-4">Adjust the importance of each question in the final score calculation.</p>\
        \
        <div className="space-y-4">\
          \{quizQuestions.map(question => (\
            <div key=\{question.id\} className="border p-4 rounded-md">\
              <p className="font-medium mb-2">Q\{question.id\}: \{question.question\}</p>\
              <div className="flex items-center">\
                <label className="mr-2">Weight:</label>\
                <select \
                  value=\{localWeights[question.id]\} \
                  onChange=\{(e) => handleWeightChange(question.id, e.target.value)\}\
                  className="border rounded-md px-2 py-1"\
                >\
                  <option value="1">1 - Low importance</option>\
                  <option value="2">2 - Medium importance</option>\
                  <option value="3">3 - High importance</option>\
                </select>\
              </div>\
              <p className="text-sm text-gray-500 mt-2">Category: \{categories[question.category].title\}</p>\
            </div>\
          ))\}\
        </div>\
      </div>\
    </div>\
  );\
\};\
\
// Main Quiz Component\
const AIReadinessQuiz = () => \{\
  const [currentQuestion, setCurrentQuestion] = useState(0);\
  const [answers, setAnswers] = useState(\{\});\
  const [view, setView] = useState('intro'); // intro, quiz, results, control\
  const [contactInfo, setContactInfo] = useState(\{ \
    name: '', \
    email: '', \
    phone: '',\
    company: '', \
    website: '',\
    position: '',\
    industry: '',\
    size: '' \
  \});\
  const [weights, setWeights] = useState(\
    quizQuestions.reduce((acc, q) => (\{...acc, [q.id]: q.weight\}), \{\})\
  );\
\
  // Handle answer selection\
  const handleAnswer = (questionId, option) => \{\
    setAnswers(\{\
      ...answers,\
      [questionId]: option\
    \});\
    \
    if (currentQuestion < quizQuestions.length - 1) \{\
      setCurrentQuestion(currentQuestion + 1);\
    \} else \{\
      setView('contact');\
    \}\
  \};\
\
  // Handle contact form input changes\
  const handleContactChange = (e) => \{\
    const \{ name, value \} = e.target;\
    setContactInfo(\{\
      ...contactInfo,\
      [name]: value\
    \});\
  \};\
\
  // Handle contact form submission\
  const handleContactSubmit = (e) => \{\
    e.preventDefault();\
    \
    // Calculate scores for webhook submission\
    const scores = calculateScores();\
    \
    // Send data to Make webhook\
    fetch('https://hook.us2.make.com/jhcnpaf3pmoed2n5hxo51dvvfwlvze1u', \{\
      method: 'POST',\
      headers: \{\
        'Content-Type': 'application/json',\
      \},\
      body: JSON.stringify(\{\
        contact: contactInfo,\
        quizResults: \{\
          scores: scores,\
          answers: answers,\
          overallScore: scores.overallScore\
        \},\
        timestamp: new Date().toISOString()\
      \})\
    \})\
    .then(response => \{\
      console.log('Webhook submission successful');\
      // Continue to results page after successful submission\
      setView('results');\
    \})\
    .catch(error => \{\
      console.error('Error submitting to webhook:', error);\
      // Still show results even if webhook fails\
      setView('results');\
    \});\
  \};\
\
  // Calculate scores by category and overall\
  const calculateScores = () => \{\
    // Initialize scores object with all categories at 0\
    const scores = Object.keys(categories).reduce((acc, cat) => (\{...acc, [cat]: 0\}), \{\});\
    const maxCategoryScores = Object.keys(categories).reduce((acc, cat) => (\{...acc, [cat]: 0\}), \{\});\
    let totalScore = 0;\
    let totalWeight = 0;\
    \
    // Calculate scores for each category and overall\
    quizQuestions.forEach(q => \{\
      const weight = weights[q.id] || q.weight;\
      const answer = answers[q.id];\
      \
      if (answer) \{\
        // Add to category score\
        scores[q.category] += answer.score * weight;\
        maxCategoryScores[q.category] += 3 * weight; // Max possible score for this question\
        \
        // Add to total score\
        totalScore += answer.score * weight;\
        totalWeight += weight;\
      \}\
    \});\
    \
    // Calculate percentages for each category\
    const percentages = \{\};\
    Object.keys(scores).forEach(cat => \{\
      if (maxCategoryScores[cat] > 0) \{\
        percentages[cat] = Math.round((scores[cat] / maxCategoryScores[cat]) * 100);\
      \} else \{\
        percentages[cat] = 0;\
      \}\
    \});\
    \
    // Calculate overall percentage\
    const overallPercentage = Math.round((totalScore / (totalWeight * 3)) * 100);\
    \
    return \{\
      categoryScores: percentages,\
      overallScore: overallPercentage\
    \};\
  \};\
\
  // Get recommendation based on score\
  const getRecommendation = (score) => \{\
    if (score < 40) return recommendations.low;\
    if (score < 75) return recommendations.medium;\
    return recommendations.high;\
  \};\
\
  // Calculate the final scores\
  const scores = view === 'results' ? calculateScores() : null;\
  const recommendation = scores ? getRecommendation(scores.overallScore) : null;\
\
  // Progress percentage for the quiz\
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;\
\
  return (\
    <div className="max-w-3xl mx-auto p-4">\
      \{/* Admin Control Button - Only visible to admins in a real implementation */\}\
      <div className="flex justify-end mb-4">\
        \{view !== 'control' && (\
          <button \
            onClick=\{() => setView('control')\}\
            className="flex items-center text-sm text-gray-600 hover:text-gray-800"\
          >\
            <Settings size=\{16\} className="mr-1" /> Admin Controls\
          </button>\
        )\}\
        \{view === 'control' && (\
          <button \
            onClick=\{() => setView('intro')\}\
            className="flex items-center text-sm text-gray-600 hover:text-gray-800"\
          >\
            <ArrowRight size=\{16\} className="mr-1" /> Back to Quiz\
          </button>\
        )\}\
      </div>\
\
      \{/* Control Panel View */\}\
      \{view === 'control' && (\
        <ControlPanel \
          weights=\{weights\} \
          setWeights=\{setWeights\} \
          setView=\{setView\} \
        />\
      )\}\
\
      \{/* Introduction View */\}\
      \{view === 'intro' && (\
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">\
          <h1 className="text-2xl font-bold mb-4">AI Readiness Assessment</h1>\
          <p className="mb-4">Find out how prepared your business is to leverage artificial intelligence technologies and get personalized recommendations to accelerate your AI journey.</p>\
          \
          <div className="mb-6">\
            <h2 className="text-lg font-semibold mb-2">What You'll Learn:</h2>\
            <ul className="space-y-2">\
              <li className="flex items-start">\
                <Check size=\{20\} className="text-green-500 mr-2 mt-1 flex-shrink-0" />\
                <span>Your organization's AI readiness score across key dimensions</span>\
              </li>\
              <li className="flex items-start">\
                <Check size=\{20\} className="text-green-500 mr-2 mt-1 flex-shrink-0" />\
                <span>Specific areas where you're well-positioned for AI adoption</span>\
              </li>\
              <li className="flex items-start">\
                <Check size=\{20\} className="text-green-500 mr-2 mt-1 flex-shrink-0" />\
                <span>Tailored recommendations for your next steps</span>\
              </li>\
              <li className="flex items-start">\
                <Check size=\{20\} className="text-green-500 mr-2 mt-1 flex-shrink-0" />\
                <span>Comparison to similar businesses in your industry</span>\
              </li>\
            </ul>\
          </div>\
          \
          <div>\
            <h2 className="text-lg font-semibold mb-2">How It Works:</h2>\
            <p className="mb-2">This quick assessment takes about 3 minutes to complete. You'll answer 10 simple questions about your current business operations and technology usage.</p>\
          </div>\
          \
          <button \
            onClick=\{() => setView('quiz')\}\
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full md:w-auto"\
          >\
            Start Assessment\
          </button>\
        </div>\
      )\}\
\
      \{/* Quiz View */\}\
      \{view === 'quiz' && (\
        <div className="bg-white rounded-lg shadow-lg p-6">\
          \{/* Progress bar */\}\
          <div className="mb-6">\
            <div className="w-full bg-gray-200 rounded-full h-2.5">\
              <div \
                className="bg-blue-600 h-2.5 rounded-full" \
                style=\{\{ width: `$\{progress\}%` \}\}\
              ></div>\
            </div>\
            <p className="text-sm text-gray-500 mt-2">Question \{currentQuestion + 1\} of \{quizQuestions.length\}</p>\
          </div>\
          \
          \{/* Question */\}\
          <h2 className="text-xl font-semibold mb-4">\{quizQuestions[currentQuestion].question\}</h2>\
          \
          \{/* Options */\}\
          <div className="space-y-3">\
            \{quizQuestions[currentQuestion].options.map(option => (\
              <button\
                key=\{option.id\}\
                onClick=\{() => handleAnswer(quizQuestions[currentQuestion].id, option)\}\
                className="w-full text-left p-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"\
              >\
                \{option.text\}\
              </button>\
            ))\}\
          </div>\
        </div>\
      )\}\
\
      \{/* Contact Information View */\}\
      \{view === 'contact' && (\
        <div className="bg-white rounded-lg shadow-lg p-6">\
          <h2 className="text-xl font-bold mb-4">Almost Done!</h2>\
          <p className="mb-4">Please provide your information to receive your personalized AI readiness scorecard.</p>\
          \
          <form onSubmit=\{handleContactSubmit\}>\
            <div className="space-y-4">\
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\
                <div>\
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>\
                  <input\
                    type="text"\
                    id="name"\
                    name="name"\
                    value=\{contactInfo.name\}\
                    onChange=\{handleContactChange\}\
                    required\
                    className="w-full p-2 border border-gray-300 rounded-md"\
                  />\
                </div>\
                \
                <div>\
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position/Job Title*</label>\
                  <input\
                    type="text"\
                    id="position"\
                    name="position"\
                    value=\{contactInfo.position\}\
                    onChange=\{handleContactChange\}\
                    required\
                    className="w-full p-2 border border-gray-300 rounded-md"\
                  />\
                </div>\
              </div>\
              \
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\
                <div>\
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email*</label>\
                  <input\
                    type="email"\
                    id="email"\
                    name="email"\
                    value=\{contactInfo.email\}\
                    onChange=\{handleContactChange\}\
                    required\
                    className="w-full p-2 border border-gray-300 rounded-md"\
                  />\
                </div>\
                \
                <div>\
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>\
                  <input\
                    type="tel"\
                    id="phone"\
                    name="phone"\
                    value=\{contactInfo.phone\}\
                    onChange=\{handleContactChange\}\
                    required\
                    className="w-full p-2 border border-gray-300 rounded-md"\
                  />\
                </div>\
              </div>\
              \
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\
                <div>\
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>\
                  <input\
                    type="text"\
                    id="company"\
                    name="company"\
                    value=\{contactInfo.company\}\
                    onChange=\{handleContactChange\}\
                    required\
                    className="w-full p-2 border border-gray-300 rounded-md"\
                  />\
                </div>\
                \
                <div>\
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Company Website</label>\
                  <input\
                    type="url"\
                    id="website"\
                    name="website"\
                    placeholder="https://"\
                    value=\{contactInfo.website\}\
                    onChange=\{handleContactChange\}\
                    className="w-full p-2 border border-gray-300 rounded-md"\
                  />\
                </div>\
              </div>\
              \
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\
                <div>\
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry*</label>\
                  <select\
                    id="industry"\
                    name="industry"\
                    value=\{contactInfo.industry\}\
                    onChange=\{handleContactChange\}\
                    required\
                    className="w-full p-2 border border-gray-300 rounded-md"\
                  >\
                    <option value="">Select your industry</option>\
                    <option value="Technology">Technology</option>\
                    <option value="Healthcare">Healthcare</option>\
                    <option value="Finance">Finance & Banking</option>\
                    <option value="Manufacturing">Manufacturing</option>\
                    <option value="Retail">Retail & E-commerce</option>\
                    <option value="Education">Education</option>\
                    <option value="Professional Services">Professional Services</option>\
                    <option value="Media">Media & Entertainment</option>\
                    <option value="Real Estate">Real Estate</option>\
                    <option value="Hospitality">Hospitality & Travel</option>\
                    <option value="Construction">Construction</option>\
                    <option value="Other">Other</option>\
                  </select>\
                </div>\
                \
                <div>\
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Company Size*</label>\
                  <select\
                    id="size"\
                    name="size"\
                    value=\{contactInfo.size\}\
                    onChange=\{handleContactChange\}\
                    required\
                    className="w-full p-2 border border-gray-300 rounded-md"\
                  >\
                    <option value="">Select company size</option>\
                    <option value="1-10">1-10 employees</option>\
                    <option value="11-50">11-50 employees</option>\
                    <option value="51-200">51-200 employees</option>\
                    <option value="201-500">201-500 employees</option>\
                    <option value="501+">501+ employees</option>\
                  </select>\
                </div>\
              </div>\
            </div>\
            \
            <div className="mt-4 text-sm text-gray-500">\
              <p>* Required fields</p>\
            </div>\
            \
            <button \
              type="submit"\
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full"\
            >\
              Get My Results\
            </button>\
          </form>\
        </div>\
      )\}\
\
      \{/* Results View */\}\
      \{view === 'results' && scores && (\
        <div className="bg-white rounded-lg shadow-lg p-6">\
          <div className="text-center mb-8">\
            <h1 className="text-2xl font-bold mb-2">Your AI Readiness Score</h1>\
            <div className="inline-flex items-center justify-center">\
              <div className="relative w-32 h-32">\
                <svg className="w-full h-full" viewBox="0 0 100 100">\
                  <circle \
                    className="text-gray-200" \
                    strokeWidth="10" \
                    stroke="currentColor" \
                    fill="transparent" \
                    r="45" \
                    cx="50" \
                    cy="50" \
                  />\
                  <circle \
                    className="text-blue-600" \
                    strokeWidth="10" \
                    strokeDasharray=\{`$\{2 * Math.PI * 45\}`\}\
                    strokeDashoffset=\{`$\{2 * Math.PI * 45 * (1 - scores.overallScore / 100)\}`\}\
                    strokeLinecap="round" \
                    stroke="currentColor" \
                    fill="transparent" \
                    r="45" \
                    cx="50" \
                    cy="50" \
                  />\
                </svg>\
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">\
                  <span className="text-3xl font-bold">\{scores.overallScore\}%</span>\
                </div>\
              </div>\
            </div>\
            \
            <p className="mt-4 text-lg">\
              \{scores.overallScore < 40 ? "Getting Started" : \
               scores.overallScore < 75 ? "Building Momentum" : \
               "Ready for Advanced AI"\}\
            </p>\
          </div>\
          \
          \{/* Category breakdown */\}\
          <div className="mb-8">\
            <h2 className="text-xl font-semibold mb-4">Readiness by Category</h2>\
            <div className="space-y-4">\
              \{Object.keys(categories).map(categoryKey => \{\
                const category = categories[categoryKey];\
                const score = scores.categoryScores[categoryKey] || 0;\
                \
                return (\
                  <div key=\{categoryKey\} className="border p-4 rounded-md">\
                    <div className="flex justify-between items-center mb-2">\
                      <h3 className="font-medium">\{category.title\}</h3>\
                      <span className="font-bold">\{score\}%</span>\
                    </div>\
                    <p className="text-sm text-gray-600 mb-2">\{category.description\}</p>\
                    <div className="w-full bg-gray-200 rounded-full h-2">\
                      <div \
                        className=\{`h-2 rounded-full $\{\
                          score < 40 ? "bg-red-500" : \
                          score < 75 ? "bg-yellow-500" : \
                          "bg-green-500"\
                        \}`\}\
                        style=\{\{ width: `$\{score\}%` \}\}\
                      ></div>\
                    </div>\
                  </div>\
                );\
              \})\}\
            </div>\
          </div>\
          \
          \{/* Recommendations */\}\
          \{recommendation && (\
            <div className="mb-8">\
              <h2 className="text-xl font-semibold mb-4">Recommended Next Steps</h2>\
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4">\
                <h3 className="font-medium text-blue-800 mb-3">\{recommendation.title\}</h3>\
                <ul className="space-y-2">\
                  \{recommendation.points.map((point, index) => (\
                    <li key=\{index\} className="flex items-start">\
                      <ArrowRight size=\{18\} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />\
                      <span>\{point\}</span>\
                    </li>\
                  ))\}\
                </ul>\
              </div>\
            </div>\
          )\}\
          \
          \{/* CTA */\}\
          <div className="bg-gray-50 p-4 rounded-md text-center">\
            <h3 className="font-semibold mb-2">Want a detailed consultation on your AI readiness?</h3>\
            <p className="mb-4">Our AI specialists can help you develop a tailored roadmap for your business.</p>\
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">\
              Schedule a Free Consultation\
            </button>\
          </div>\
        </div>\
      )\}\
    </div>\
  );\
\};\
\
export default AIReadinessQuiz;}