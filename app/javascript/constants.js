const coachBu = "Coach"
const salesBu = "Sales"
const recrutementBu = "Recrutement"
const produitBu = "Produit"
const grandsComptesBu = "Grands Comptes"
const techBu = "Tech"
const sdrBu = "SDR"
const marketingBu = "Marketing"
const associesBu = "Associés"
const opsBu = "Ops"
const teamLeadersBu = "Team leaders"
const users = [
  { firstName: 'Aéla', photo: 'aela.jpeg', businessUnits: [coachBu] },
  { firstName: 'Agathe R', photo: 'agathe_r.jpeg', businessUnits: [salesBu] },
  { firstName: 'Agathe T', photo: 'agathe_t.jpeg', businessUnits: [recrutementBu] },
  { firstName: 'Albane', photo: 'albane.jpeg', businessUnits: [salesBu] },
  { firstName: 'Alexis', photo: 'alex.jpeg', businessUnits: [salesBu] },
  { firstName: 'Ariane', photo: 'ari.jpeg', businessUnits: ['Produit'] },
  { firstName: 'Arthur', photo: 'arthur.jpeg', businessUnits: [grandsComptesBu, techBu] },
  { firstName: 'Bart', photo: 'bart.jpeg', businessUnits: [techBu] },
  { firstName: 'Carlotta', photo: 'carlos.jpeg', businessUnits: [coachBu] },
  { firstName: 'Celestin', photo: 'celo.jpeg', businessUnits: [techBu] },
  { firstName: 'Charlotte', photo: 'charlotte.jpeg', businessUnits: ['SDR', salesBu] },
  { firstName: 'Chloé', photo: 'chloe.jpeg', businessUnits: ['SDR', salesBu] },
  { firstName: 'Constance C', photo: 'constance_c.jpeg', businessUnits: [grandsComptesBu, salesBu] },
  { firstName: 'Constance P', photo: 'constance_p.jpeg', businessUnits: [coachBu] },
  { firstName: 'Darivath', photo: 'dari.jpeg', businessUnits: [salesBu] },
  { firstName: 'Eliott', photo: 'eliott.jpeg', businessUnits: ['Marketing'] },
  { firstName: 'Florian', photo: 'flo.jpeg', businessUnits: [coachBu] },
  { firstName: 'Héloïse', photo: 'heloise.jpeg', businessUnits: [recrutementBu] },
  { firstName: 'Hortense', photo: 'hortense.jpeg', businessUnits: [salesBu] },
  { firstName: 'Jeremy', photo: 'jeremy.jpeg', businessUnits: [salesBu] },
  { firstName: 'Jubeo', photo: 'jubeo.jpeg', businessUnits: ['Produit'] },
  { firstName: 'Julia', photo: 'julia.jpeg', businessUnits: [grandsComptesBu, salesBu] },
  { firstName: 'Julie', photo: 'julie.jpeg', businessUnits: [salesBu] },
  { firstName: 'Quitterie', photo: 'kit.jpeg', businessUnits: ['Associés', 'Produit', 'Marketing'] },
  { firstName: 'Lola', photo: 'lola.jpeg', businessUnits: [techBu] },
  { firstName: 'Luc', photo: 'luc.jpeg', businessUnits: [salesBu] },
  { firstName: 'Lucie', photo: 'lucie.jpeg', businessUnits: [recrutementBu] },
  { firstName: 'Emmanuelle', photo: 'manue.jpeg', businessUnits: ['Associés', 'Ops', grandsComptesBu, coachBu, recrutementBu] },
  { firstName: 'Marie', photo: 'marie.jpeg', businessUnits: [salesBu] },
  { firstName: 'Mathilde', photo: 'mathilde.jpeg', businessUnits: [salesBu] },
  { firstName: 'Minéa', photo: 'mims.jpeg', businessUnits: [salesBu, "Team leaders"] },
  { firstName: 'Nicolas', photo: 'nico.jpeg', businessUnits: [salesBu] },
  { firstName: 'Nisrine', photo: 'niss.jpeg', businessUnits: [salesBu, 'Team leaders'] },
  { firstName: 'Raphaël', photo: 'raph.jpeg', businessUnits: [salesBu] },
  { firstName: 'Samy', photo: 'samy.jpeg', businessUnits: ['Associés', techBu] },
  { firstName: 'Seb', photo: 'seb.jpeg', businessUnits: [techBu] },
  { firstName: 'Thibault', photo: 'thib.jpeg', businessUnits: ['Associés', salesBu] },
  { firstName: 'Thomas', photo: 'toto.jpeg', businessUnits: [salesBu] },
  { firstName: 'Tristan', photo: 'tristan.jpeg', businessUnits: [salesBu] },
  { firstName: 'Victor C', photo: 'victor_c.jpeg', businessUnits: ['Ops'] },
  { firstName: 'Victor L', photo: 'victor_l.jpeg', businessUnits: [techBu] },
];

const BUList = [
  coachBu,
  salesBu,
  recrutementBu,
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
  recrutementBu,
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