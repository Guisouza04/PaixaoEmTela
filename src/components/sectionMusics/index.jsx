import { Container, MusicBox } from "./styles";

const playlist = [
  {
    title: "Meu Sonho",
    Frame: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1dGxOpMQknNgkD5d9BCObF?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,
  },
  {
    title: "Amor Sem Medida",
    Frame: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/56eUThEKkPO5MVKUTpv6cG?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  {
    title: "Tudo que você Quiser",
    Frame: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4JSROzfWqKccwZ68DX1aJe?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
];

export function SectionMusics() {
  return (
    <Container id="sectionMusics">
      <h2>Nossas Músicas</h2>
      {playlist.map((music, index) => (
        <MusicBox key={index}>
          <div dangerouslySetInnerHTML={{ __html: music.Frame }} />
        </MusicBox>
      ))}
    </Container>
  );
}

export default SectionMusics;
