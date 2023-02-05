import './App.css';
import Hero from './heroes/Hero';


const superheroes = [
  { url: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg", name: "Бетмен", universe: "DC Comics", alterego: "Брюс Уэйн", works: "Борец с преступностью, филантроп, миллиардер", frends: "Робин, Бэтгерл", superpower: "Интеллект, обширные познания, знания боевых искусств, ловкость" },
  { url: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg", name: "Супермен", universe: "DC Comics", alterego: "Кларк Кент", works: "борец за справедливость", frends: "собака Крипто", superpower: "Непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм" },
  { url: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg", name: "Железный человек", universe: "Marvel Comics", alterego: "Тони Старк", works: "гений, миллиардер, плейбой, филантроп", frends: "Мстители", superpower: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы" },
  { url: "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg", name: "Спайдер-мен/Человек-паук", universe: "Marvel Comics", alterego: "Питер Паркер", works: "борец за справедливость, студент, фотограф", frends: "Мстители, Фантастическая четверка, Люди Икс", superpower: "верхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины" },
  { url: "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg", name: "Капитан Америка", universe: "Marvel Comics", alterego: "Стивен Роджерс", works: "супер-солдат", frends: "Мстители", superpower: "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя" },
  { url: "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg", name: "Тор", universe: "Marvel Comics", alterego: "нет; полное имя — Тор Одинсон", works: "борец за справедливость, скандинавский бог", frends: "Мстители", superpower: "все, что может бог, плюс молот Мьелнир" },
  { url: "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg", name: "Халк", universe: "Marvel Comics", alterego: "Брюс Беннер", works: "борец за справедливость", frends: "Мстители", superpower: "сверхчеловеческая сила искорость, выносливость, полет" }
]

function App() {
  return (
    <div className="App">
      {
        superheroes.map((superhero) =>
          <Hero url={superhero.url} name={superhero.name} universe={superhero.universe} alterego={superhero.alterego} works={superhero.works} frends={superhero.frends} superpower={superhero.superpower} />
        )
      }

    </div>
  );
}

export default App;
