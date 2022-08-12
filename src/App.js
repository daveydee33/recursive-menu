// import "./styles.css";

export default function App() {
  return (
    <nav>
      <ol>
        {links.map((link) => {
          return (
            <RecursiveNavItem
              label={link.label}
              link={link.link}
              children={link.children}
            />
          );
        })}
      </ol>
    </nav>
  );
}

function RecursiveNavItem({ label, link, children }) {
  return (
    <>
      <li>{label}</li>
      {children && (
        <ol>
          {children.map((child) => {
            return (
              <RecursiveNavItem
                label={child.label}
                link={child.link}
                children={child.children}
              />
            );
          })}
        </ol>
      )}
    </>
  );
}

const links = [
  {
    label: "Link",
    path: "/link"
  },
  {
    label: "Link2",
    path: "/link2"
  },
  {
    label: "Parent",
    children: [
      {
        label: "Child",
        path: "/child"
      },
      {
        label: "Child2",
        path: "/child"
      },
      {
        label: "Child3",
        path: "/child"
      },
      {
        label: "Child4",
        path: "/child"
      },
      {
        label: "Child5",
        path: "/child"
      },
      {
        label: "Child with Children",
        children: [
          {
            label: "GrandChild 1",
            path: "/c1"
          },
          {
            label: "GrandChild 2",
            children: [
              {
                label: "GreatGrandChild",
                path: "/gc1"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Parent2",
    children: [
      {
        label: "Parent2Child",
        path: "/child"
      },
      {
        label: "Parent2Child2",
        path: "/child"
      }
    ]
  }
];
