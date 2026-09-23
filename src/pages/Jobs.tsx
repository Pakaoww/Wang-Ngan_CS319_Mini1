import { useState } from 'react'
import { jobs } from '../data'
import type { Job } from '../data'

type JobsProps = { onJobSelect: (job: Job) => void }

export default function Jobs({ onJobSelect }: JobsProps) {
  const [search, setSearch] = useState('')
  const [level, setLevel] = useState('All levels')
  const visibleJobs = jobs.filter((job) => `${job.title} ${job.company} ${job.skills.join(' ')}`.toLowerCase().includes(search.toLowerCase()) && (level === 'All levels' || job.level === level))
  return <section className="container page"><div className="page-heading"><p className="eyebrow">JOB SEARCH</p><h1>Find your next job</h1><p>Search opportunities in AI and digital technology.</p></div><div className="filters"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search jobs, skills, or companies" /><select value={level} onChange={(event) => setLevel(event.target.value)}><option>All levels</option><option>Entry-level</option><option>Mid-level</option><option>Senior</option></select></div><p className="result-count">{visibleJobs.length} jobs found</p><div className="job-list">{visibleJobs.map((job) => <article className="job-item" key={job.title}><div><span className="company">{job.company}</span><h2>{job.title}</h2><p>{job.location} · {job.type} · {job.level}</p><div>{job.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></div><div className="job-side"><strong>{job.salary}</strong><button className="button small" onClick={() => onJobSelect(job)}>View Details</button></div></article>)}</div></section>
}
