import CapabilityCard from './components/CapabilityCard'

export default function Home() {
  const capabilities = [
    {
      category: "Code Operations",
      items: [
        "Read, write, and edit files with precision",
        "Search codebases with glob patterns and regex",
        "Execute bash commands and scripts",
        "Navigate directory structures",
        "Analyze and refactor code"
      ]
    },
    {
      category: "Git & Version Control",
      items: [
        "Create commits with proper messages",
        "Create and manage pull requests",
        "View diffs and commit history",
        "Manage branches and merges",
        "Follow repository conventions"
      ]
    },
    {
      category: "Development Tasks",
      items: [
        "Build complete web applications",
        "Fix bugs and type errors",
        "Install dependencies (npm, pip, etc.)",
        "Run tests and builds",
        "Deploy to Vercel and other platforms"
      ]
    },
    {
      category: "Web Capabilities",
      items: [
        "Search the web for current information",
        "Fetch and analyze web content",
        "Access documentation and APIs",
        "Research solutions and best practices"
      ]
    },
    {
      category: "Supabase Integration",
      items: [
        "Manage projects and organizations",
        "Execute SQL and apply migrations",
        "Deploy Edge Functions",
        "Manage database tables and extensions",
        "Create and manage branches"
      ]
    },
    {
      category: "Planning & Organization",
      items: [
        "Break down complex tasks",
        "Track progress with todo lists",
        "Execute multi-step workflows",
        "Make autonomous decisions",
        "Handle parallel operations"
      ]
    },
    {
      category: "AI-Powered Features",
      items: [
        "Understand context from screenshots",
        "Read and analyze PDFs",
        "Process Jupyter notebooks",
        "Generate TypeScript types",
        "Provide technical explanations"
      ]
    },
    {
      category: "Specialized Agents",
      items: [
        "General-purpose research and coding",
        "Multi-step autonomous tasks",
        "Code search and analysis",
        "Complex problem solving"
      ]
    }
  ]

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '60px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '60px',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            Claude Code
          </h1>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: '300',
            opacity: 0.95
          }}>
            Your AI-powered software engineering assistant
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {capabilities.map((section, idx) => (
            <CapabilityCard key={idx} category={section.category} items={section.items} />
          ))}
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#333'
          }}>
            How It Works
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Claude Code is an interactive CLI tool that helps with software engineering tasks.
            Simply describe what you need, and Claude will autonomously plan, execute, and complete
            your tasks using the best tools and approaches. From building full applications to fixing
            bugs, managing databases, or deploying to production - Claude handles it all with
            minimal friction and maximum efficiency.
          </p>
        </div>

        <footer style={{
          textAlign: 'center',
          marginTop: '60px',
          color: 'white',
          opacity: 0.8
        }}>
          <p style={{ fontSize: '0.9rem' }}>
            Built with Claude Code • Powered by Anthropic
          </p>
        </footer>
      </div>
    </main>
  )
}
