// #TODO: handle active link

import "./styles.css";
import { useState } from "react";

export default function App() {
  const activeItem = "GrandChild 1";

  return (
    <nav>
      <ol>
        {links.map((child) => {
          return (
            <RecursiveNavItem
              label={child.label}
              path={child.path}
              children={child.children}
              activeItem={activeItem}
              key={child.label}
            />
          );
        })}
      </ol>
    </nav>
  );
}

function RecursiveNavItem({ label, path, children, activeItem }) {
  const [hideChildren, setHideChildren] = useState(false);

  return (
    <>
      <li>
        <span className={label === activeItem ? "active" : ""}>
          <a href={path}>{label}</a>
        </span>
        {children && (
          <button onClick={() => setHideChildren((v) => !v)}>
            {hideChildren ? "show" : "hide"}
          </button>
        )}
      </li>
      {!hideChildren && children && (
        <ol>
          {children.map((child) => {
            return (
              <RecursiveNavItem
                label={child.label}
                path={child.path}
                children={child.children}
                activeItem={activeItem}
                key={child.label}
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
    path: "/link",
  },
  {
    label: "Link2",
    path: "/link2",
  },
  {
    label: "Parent",
    children: [
      {
        label: "Child",
        path: "/child",
      },
      {
        label: "Child2",
        path: "/child",
      },
      {
        label: "Child3",
        path: "/child",
      },
      {
        label: "Child4",
        path: "/child",
      },
      {
        label: "Child5",
        path: "/child",
      },
      {
        label: "Child with Children",
        children: [
          {
            label: "GrandChild 1",
            path: "/c1",
          },
          {
            label: "GrandChild 2",
            children: [
              {
                label: "GreatGrandChild",
                path: "/gc1",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Parent2",
    children: [
      {
        label: "Parent2Child",
        path: "/child",
      },
      {
        label: "Parent2Child2",
        path: "/child",
      },
    ],
  },
];
