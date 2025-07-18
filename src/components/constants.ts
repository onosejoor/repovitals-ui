import { Github, Mail, Twitter } from "lucide-react";

export const productLinks = [
  { label: "Explore", path: "/explore" },
  { label: "Pricing", path: "/pricing" },
  { label: "Documentation", path: "/docs" },
];

export const companyLinks = [
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy", path: "/privacy" },
  { label: "Terms", path: "/terms" },
];

export const connectLinks = [
  { icon: Github, href: "https://github.com/repovitals" },
  {
    icon: Twitter,
    href: "https://twitter.com/intent/follow?screen_name=repovitals",
  },
  { icon: Mail, href: "mailto:support@repovitals.com" },
];

export const newRepoReport = {
  id: 37382053,
  description: "Decred daemon in Go (golang).",
  language: "Go",
  stargazers_count: 760,
  forks_count: 305,
  open_issues_count: 24,
  subscribers_count: 74,
  size: 42069,
  default_branch: "master",
  hasFullData: true,

  homepage: "https://decred.org",
  license: "isc",
  archived: false,
  fork: false,
  pushed_at: "2025-06-13T16:10:26.000Z",
  created_at: "2016-01-26T20:28:42.000Z",
  updated_at: "2025-06-13T16:10:30.000Z",
  topics: [
    "blockchain",
    "cryptocurrency",
    "dcrd",
    "decred",
    "decred-daemon",
    "decred-nodes",
    "go",
    "golang",
    "p2p",
    "peer-to-peer",
  ],
  metadata: {
    files: {
      readme: "README.md",
      changelog: "CHANGES",
      license: "LICENSE",
      security: "SECURITY.md",
    },
  },
  commit_stats: {
    total_commits: 6760,
    total_committers: 164,
    mean_commits: 41.22,
    last_synced_commit: "7735cbb4e11b61636e88ad07e9ad8c1a30dd4047",
  },
  tags_count: 410,
  repovitals_score: 6.0,
  criticality: {
    score: 5.6,
    commit_frequency: 0.29,
    recent_release_count: 1,
    updated_issues_count: 2,
    issue_comment_frequency: 0.67,
    github_mention_count: 129,
    last_scanned: "2025-06-16",
  },
  scorecard: {
    score: 5.8,
    version: "v5.2.1-5-g1f95bf1a",
    last_scanned: "2025-06-16",
    checks: [
      {
        name: "Maintained",
        score: 10,
        reason:
          "30 commit(s) and 18 issue activity found in the last 90 days -- score normalized to 10",
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#maintained",
      },
      {
        name: "Code-Review",
        score: 9,
        reason: "Found 29/30 approved changesets -- score normalized to 9",
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#code-review",
      },
      {
        name: "Token-Permissions",
        score: 0,
        reason: "detected GitHub workflow tokens with excessive permissions",
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#token-permissions",
      },
      {
        name: "Packaging",
        score: -1,
        reason: "packaging workflow not detected",
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#packaging",
      },
      {
        name: "Dangerous-Workflow",
        score: 10,
        reason: "no dangerous workflow patterns detected",
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#dangerous-workflow",
      },
      {
        name: "Binary-Artifacts",
        score: 9,
        reason: "binaries present in source code",
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#binary-artifacts",
      },
      {
        name: "License",
        score: 9,
        reason: "license file detected",
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#license",
      },
      {
        name: "Security-Policy",
        score: 0,
        reason: "security policy file not detected",
        details: ["Warn: no security policy file detected"],
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#security-policy",
      },
      {
        name: "Fuzzing",
        score: 10,
        reason: "project is fuzzed",
        details: [
          "Info: GoBuiltInFuzzer integration found: client/asset/btc/coin_selection_test.go:143",
        ],
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#fuzzing",
      },
      {
        name: "Signed-Releases",
        score: 3,
        reason: "2 out of the last 5 releases have signed artifacts",
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#signed-releases",
      },
      {
        name: "Pinned-Dependencies",
        score: 5,
        reason: "dependency not pinned by hash detected",
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#pinned-dependencies",
      },
      {
        name: "SAST",
        score: 0,
        reason: "SAST tool is not run on all commits",
        details: ["Warn: 0 commits out of 30 are checked with a SAST tool"],
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#sast",
      },
      {
        name: "Vulnerabilities",
        score: 5,
        reason: "5 existing vulnerabilities detected",
        details: [
          "Warn: Project is vulnerable to: GO-2025-3487 / GHSA-hcg3-q754-cr77",
          "Warn: Project is vulnerable to: GO-2025-3503 / GHSA-qxp5-gwg8-xv66",
        ],
        doc_url:
          "https://github.com/ossf/scorecard/blob/main/docs/checks.md#vulnerabilities",
      },
    ],
  },
  contributors: [
    {
      name: "Dan Abramov",
      contributions: 1247,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      name: "Sebastian Markbåge",
      contributions: 892,
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      name: "Andrew Clark",
      contributions: 756,
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      name: "Brian Vaughn",
      contributions: 623,
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
  ],
  dependencies: {
    total: 127,
    outdated: 8,
    vulnerable: 2,
    recent: [
      {
        name: "typescript",
        version: "5.1.6",
        latest: "5.2.2",
        status: "outdated",
      },
      {
        name: "eslint",
        version: "8.45.0",
        latest: "8.45.0",
        status: "current",
      },
      {
        name: "react-dom",
        version: "18.2.0",
        latest: "18.2.0",
        status: "current",
      },
      {
        name: "webpack",
        version: "5.88.1",
        latest: "5.88.2",
        status: "outdated",
      },
    ],
  },
};

export const repositories = [
  {
    id: 1,
    owner: "facebook",
    name: "react",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    language: "JavaScript",
    stars: 218000,
    forks: 45200,
    score: 9.2,
    security: 8.7,
    maintenance: 9.5,
    popularity: 9.8,
    category: "Web Framework",
    license: "MIT",
    lastUpdated: "2 hours ago",
    badges: ["maintained", "secure", "popular"],
    hasFullData: true,
  },
  {
    id: 2,
    owner: "microsoft",
    name: "vscode",
    description: 'Visual Studio Code - Open Source ("Code - OSS")',
    language: "TypeScript",
    stars: 156000,
    forks: 27800,
    score: 8.9,
    security: 9.1,
    maintenance: 8.8,
    popularity: 8.7,
    category: "Developer Tool",
    license: "MIT",
    lastUpdated: "4 hours ago",
    badges: ["maintained", "secure", "popular"],
    hasFullData: true,
  },
  {
    id: 3,
    owner: "nodejs",
    name: "node",
    description: "Node.js JavaScript runtime",
    language: "JavaScript",
    stars: 102000,
    forks: 28100,
    score: 8.5,
    security: 8.2,
    maintenance: 8.9,
    popularity: 8.4,
    category: "Runtime",
    license: "MIT",
    lastUpdated: "6 hours ago",
    badges: ["maintained", "secure"],
    hasFullData: true,
  },
  {
    id: 4,
    owner: "tensorflow",
    name: "tensorflow",
    description: "An Open Source Machine Learning Framework for Everyone",
    language: "Python",
    stars: 182000,
    forks: 74200,
    score: 8.1,
    security: 7.8,
    maintenance: 8.6,
    popularity: 7.9,
    category: "AI/ML",
    license: "Apache-2.0",
    lastUpdated: "1 day ago",
    badges: ["maintained", "popular"],
    hasFullData: false,
  },
  {
    id: 5,
    owner: "vercel",
    name: "next.js",
    description: "The React Framework for the Web",
    language: "JavaScript",
    stars: 118000,
    forks: 25300,
    score: 9.0,
    security: 8.9,
    maintenance: 9.2,
    popularity: 8.9,
    category: "Web Framework",
    license: "MIT",
    lastUpdated: "3 hours ago",
    badges: ["maintained", "secure", "popular"],
    hasFullData: true,
  },
  {
    id: 6,
    owner: "vuejs",
    name: "vue",
    description:
      "Vue.js is a progressive, incrementally-adoptable JavaScript framework",
    language: "TypeScript",
    stars: 206000,
    forks: 33700,
    score: 8.7,
    security: 8.4,
    maintenance: 9.1,
    popularity: 8.6,
    category: "Web Framework",
    license: "MIT",
    lastUpdated: "5 hours ago",
    badges: ["maintained", "secure", "popular"],
    hasFullData: true,
  },
  {
    id: 7,
    owner: "lodash",
    name: "lodash",
    description:
      "A modern JavaScript utility library delivering modularity, performance & extras.",
    language: "JavaScript",
    stars: 57000,
    forks: 7000,
    score: 4.8,
    security: 3.9,
    maintenance: 5.1,
    popularity: 6.3,
    category: "Utility Library",
    license: "MIT",
    lastUpdated: "2 weeks ago",
    badges: [],
    hasFullData: true,
  },
  {
    id: 8,
    owner: "pallets",
    name: "flask",
    description: "A micro web framework written in Python.",
    language: "Python",
    stars: 65000,
    forks: 16000,
    score: 7.5,
    security: 6.7,
    maintenance: 8.2,
    popularity: 7.6,
    category: "Web Framework",
    license: "BSD-3-Clause",
    lastUpdated: "5 days ago",
    badges: ["maintained", "popular"],
    hasFullData: true,
  },
  {
    id: 9,
    owner: "facebook",
    name: "react",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    language: "JavaScript",
    stars: 212000,
    forks: 45000,
    score: 9.2,
    security: 9.0,
    maintenance: 9.4,
    popularity: 9.5,
    category: "UI Library",
    license: "MIT",
    lastUpdated: "12 hours ago",
    badges: ["maintained", "secure", "popular"],
    hasFullData: true,
  },
  {
    id: 10,
    owner: "python",
    name: "cpython",
    description: "The Python programming language.",
    language: "C",
    stars: 58000,
    forks: 27000,
    score: 7.1,
    security: 7.5,
    maintenance: 6.2,
    popularity: 7.8,
    category: "Programming Language",
    license: "Python-2.0",
    lastUpdated: "1 day ago",
    badges: ["popular"],
    hasFullData: true,
  },
  {
    id: 11,
    owner: "getify",
    name: "You-Dont-Know-JS",
    description: "A book series on JavaScript.",
    language: "JavaScript",
    stars: 170000,
    forks: 34000,
    score: 4.5,
    security: 4.2,
    maintenance: 3.9,
    popularity: 7.2,
    category: "Educational",
    license: "CC-BY-NC-ND-4.0",
    lastUpdated: "1 month ago",
    badges: [],
    hasFullData: true,
  },
];
