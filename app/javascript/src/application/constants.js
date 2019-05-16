const coachBu = "Coach"
const salesBu = "Sales"
const rhBu = "RH"
const produitBu = "Produit"
const grandsComptesBu = "Grands Comptes"
const techBu = "Tech"
const sdrBu = "SDR"
const marketingBu = "Marketing"
const associesBu = "Associés"
const opsBu = "Ops"
const teamLeadersBu = "Team leaders"
const financeBu = "Finance"
const users = [
  { firstName: 'Aéla', photo: 'aela.jpeg', businessUnits: [coachBu], startDate: '2019/03' },
  { firstName: 'Agathe R', photo: 'agathe_r.jpeg', businessUnits: [salesBu], startDate: '2019/03' },
  { firstName: 'Agathe T', photo: 'agathe_t.jpeg', businessUnits: [rhBu], startDate: '2018/07' },
  { firstName: 'Albane', photo: 'albane.jpeg', businessUnits: [salesBu], startDate: '2019/04' },
  { firstName: 'Alexis', photo: 'alex.jpeg', businessUnits: [salesBu], startDate: '2017/03' },
  { firstName: 'Ariane', photo: 'ari.jpeg', businessUnits: [produitBu], startDate: '2016/10' },
  { firstName: 'Arthur', photo: 'arthur.jpeg', businessUnits: [grandsComptesBu, techBu], startDate: '2019/03' },
  { firstName: 'Bart', photo: 'bart.jpeg', businessUnits: [techBu], startDate: '2017/11' },
  { firstName: 'Carlotta', photo: 'carlos.jpeg', businessUnits: [coachBu], startDate: '2018/03' },
  { firstName: 'Caroline', photo: 'caroline.jpeg', businessUnits: [produitBu], startDate: '2019/05' },
  { firstName: 'Celestin', photo: 'celo.jpeg', businessUnits: [techBu], startDate: '2018/02' },
  { firstName: 'Charlotte', photo: 'charlotte.jpeg', businessUnits: [sdrBu, salesBu], startDate: '2019/03' },
  { firstName: 'Chloé', photo: 'chloe.jpeg', businessUnits: [sdrBu, salesBu], startDate: '2019/03' },
  { firstName: 'Constance C', photo: 'constance_c.jpeg', businessUnits: [grandsComptesBu, salesBu], startDate: '2019/03' },
  { firstName: 'Constance P', photo: 'constance_p.jpeg', businessUnits: [coachBu], startDate: '2018/08' },
  { firstName: 'Darivath', photo: 'dari.jpeg', businessUnits: [salesBu], startDate: '2017/09' },
  { firstName: 'Eliott', photo: 'eliott.jpeg', businessUnits: [marketingBu], startDate: '2018/11' },
  { firstName: 'Florian', photo: 'flo.jpeg', businessUnits: [coachBu], startDate: '2018/02' },
  { firstName: 'Héloïse', photo: 'heloise.jpeg', businessUnits: [rhBu], startDate: '2019/01' },
  { firstName: 'Hortense', photo: 'hortense.jpeg', businessUnits: [salesBu], startDate: '2019/01' },
  { firstName: 'Jeremy', photo: 'jeremy.jpeg', businessUnits: [salesBu], startDate: '2019/01' },
  { firstName: 'Jubeo', photo: 'jubeo.jpeg', businessUnits: [produitBu], startDate: '2019/03' },
  { firstName: 'Julia', photo: 'julia.jpeg', businessUnits: [grandsComptesBu, salesBu], startDate: '2017/03' },
  { firstName: 'Julie', photo: 'julie.jpeg', businessUnits: [salesBu], startDate: '2019/03' },
  { firstName: 'Quitterie', photo: 'kit.jpeg', businessUnits: [associesBu, produitBu, marketingBu, opsBu], startDate: '2016/01' },
  { firstName: 'Lola', photo: 'lola.jpeg', businessUnits: [techBu], startDate: '2018/09' },
  { firstName: 'Luc', photo: 'luc.jpeg', businessUnits: [salesBu], startDate: '2019/01' },
  { firstName: 'Lucie', photo: 'lucie.jpeg', businessUnits: [rhBu], startDate: '2019/04' },
  { firstName: 'Emmanuelle', photo: 'manue.jpeg', businessUnits: [associesBu, opsBu, grandsComptesBu, coachBu, rhBu, financeBu], startDate: '2016/05' },
  { firstName: 'Marie', photo: 'marie.jpeg', businessUnits: [salesBu], startDate: '2019/01' },
  { firstName: 'Mathilde', photo: 'mathilde.jpeg', businessUnits: [salesBu], startDate: '2018/10' },
  { firstName: 'Minéa', photo: 'mims.jpeg', businessUnits: [salesBu, teamLeadersBu], startDate: '2017/09' },
  { firstName: 'Nicolas', photo: 'nico.jpeg', businessUnits: [salesBu], startDate: '2017/09' },
  { firstName: 'Nisrine', photo: 'niss.jpeg', businessUnits: [salesBu, teamLeadersBu], startDate: '2017/09' },
  { firstName: 'Pénélope', photo: 'penelope.jpeg', businessUnits: [financeBu], startDate: '2019/05' },
  { firstName: 'Raphaël', photo: 'raph.jpeg', businessUnits: [salesBu], startDate: '2018/10' },
  { firstName: 'Samy', photo: 'samy.jpeg', businessUnits: [associesBu, techBu], startDate: '2016/04' },
  { firstName: 'Seb', photo: 'seb.jpeg', businessUnits: [techBu], startDate: '2017/09' },
  { firstName: 'Thibault', photo: 'thib.jpeg', businessUnits: [associesBu, salesBu], startDate: '2016/10' },
  { firstName: 'Thomas', photo: 'toto.jpeg', businessUnits: [salesBu], startDate: '2018/05' },
  { firstName: 'Tristan', photo: 'tristan.jpeg', businessUnits: [salesBu], startDate: '2018/05' },
  { firstName: 'Victor C', photo: 'victor_c.jpeg', businessUnits: [opsBu], startDate: '2018/09' },
  { firstName: 'Victor L', photo: 'victor_l.jpeg', businessUnits: [techBu], startDate: '2017/11' },
];

const BUList = [
  coachBu,
  salesBu,
  rhBu,
  produitBu,
  grandsComptesBu,
  techBu,
  sdrBu,
  marketingBu,
  associesBu,
  opsBu,
  teamLeadersBu
];

export {
  users,
  coachBu,
  salesBu,
  rhBu,
  produitBu,
  grandsComptesBu,
  techBu,
  sdrBu,
  marketingBu,
  associesBu,
  opsBu,
  teamLeadersBu,
  BUList
};
