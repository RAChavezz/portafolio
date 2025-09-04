import { profile } from '../data/profile';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';

// (unused helper removed)

export default function Skills() {
  const s = profile.skills;
  return (
    <Section id="skills" title="Skills">
      <div className="container mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Languages & Frameworks">
          <div className="flex flex-wrap gap-2">
            {s.languagesAndFrameworks.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </Card>
        <Card title="Databases">
          <div className="flex flex-wrap gap-2">
            {s.databases.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </Card>
        <Card title="Cloud & DevOps">
          <div className="flex flex-wrap gap-2">
            {s.cloudAndDevOps.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </Card>
        <Card title="Architecture & Methodologies">
          <div className="flex flex-wrap gap-2">
            {s.architectureAndMethodologies.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </Card>
        <Card title="Tools" className="sm:col-span-2 lg:col-span-3">
          <div className="flex flex-wrap gap-2">
            {s.tools.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}


