import { useState } from "react";

const technologies = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        description:
          "A JavaScript library from Meta for building user interfaces out of reusable components. This dashboard is built with React."
      },
      {
        name: "JavaScript",
        description:
          "The programming language of the web. It runs in the browser and adds logic and interactivity to pages."
      },
      {
        name: "CSS",
        description:
          "Cascading Style Sheets control how HTML looks: layout, colours, fonts and spacing."
      }
    ]
  },
  {
    category: "Containerisation",
    items: [
      {
        name: "Docker",
        description:
          "A platform that packages an application and everything it needs into a container, so it runs the same way on any machine."
      },
      {
        name: "Dockerfile",
        description:
          "A text file of step-by-step instructions Docker uses to build an image, e.g. which base image to use, which files to copy and which commands to run."
      }
    ]
  },
  {
    category: "Source Control",
    items: [
      {
        name: "Git",
        description:
          "A distributed version control system that tracks changes to code, letting teams work on branches and merge their work safely."
      },
      {
        name: "GitHub",
        description:
          "A cloud platform that hosts Git repositories and adds collaboration features like pull requests, code review, issues and Actions."
      }
    ]
  },
  {
    category: "CI/CD",
    items: [
      {
        name: "GitHub Actions",
        description:
          "GitHub's built-in automation service. It runs workflows on events like a push to build, test and deploy code automatically."
      },
      {
        name: "YAML Pipelines",
        description:
          "Pipelines defined as code in YAML files. They describe the jobs and steps a CI/CD system runs, and are version-controlled alongside the app."
      }
    ]
  },
  {
    category: "Orchestration",
    items: [
      {
        name: "Kubernetes",
        description:
          "An open-source system that automates deploying, scaling and managing containerised applications across a cluster of machines."
      },
      {
        name: "Deployments",
        description:
          "A Kubernetes object that declares how many replicas of a container should run, and handles rolling updates and self-healing."
      },
      {
        name: "Services",
        description:
          "A Kubernetes object that gives a stable network address to a group of pods and load-balances traffic between them."
      }
    ]
  },
  {
    category: "Cloud (Azure)",
    items: [
      {
        name: "Azure",
        description:
          "Microsoft's cloud platform. It provides on-demand computing, storage, networking and managed services so you don't have to run your own servers."
      },
      {
        name: "Azure Kubernetes Service (AKS)",
        description:
          "A managed Kubernetes service on Azure. Microsoft runs the control plane, so you only manage your applications and worker nodes."
      },
      {
        name: "Azure Container Registry (ACR)",
        description:
          "A private registry on Azure for storing and managing Docker container images, which AKS can pull from securely."
      }
    ]
  },
  {
    category: "Infrastructure as Code (Terraform)",
    items: [
      {
        name: "Terraform",
        description:
          "An open-source tool from HashiCorp for defining cloud infrastructure in code, so it can be version-controlled, reviewed and created repeatably."
      },
      {
        name: "Providers",
        description:
          "Plugins that let Terraform talk to a platform's API, such as the azurerm provider for creating Azure resources."
      },
      {
        name: "State",
        description:
          "A file where Terraform records what it has created, so it can work out exactly what to add, change or remove on the next run."
      }
    ]
  }
];

const TechStack = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (name) => setSelected(selected === name ? null : name);

  return (
    <div className="tech-section">
      <h2>Technology Stack</h2>
      <p className="tech-hint">Click any item to learn what it is.</p>

      {technologies.map((group) => (
        <div key={group.category} className="tech-group">
          <h3>{group.category}</h3>

          <ul>
            {group.items.map((item) => {
              const isOpen = selected === item.name;
              return (
                <li key={item.name}>
                  <button
                    type="button"
                    className={`tech-item${isOpen ? " active" : ""}`}
                    aria-expanded={isOpen}
                    onClick={() => toggle(item.name)}
                  >
                    {item.name}
                  </button>
                  {isOpen && <p className="tech-description">{item.description}</p>}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
