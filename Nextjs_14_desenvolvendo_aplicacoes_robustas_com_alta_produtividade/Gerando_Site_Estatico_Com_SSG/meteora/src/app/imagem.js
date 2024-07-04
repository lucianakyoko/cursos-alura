export default function githubLoader({src, width, quality}) {
  return `${src}?w=${width}&q=${quality ?? 75}`;
}