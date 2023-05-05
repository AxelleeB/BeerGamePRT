const stockCosts = 5
const backorderCosts = 10

//Calcul des semaines sans perturbations (taux de commande parfait)
export function calcPerfectOrderRatePct(perfectOrders, allOrders) {
    return perfectOrders / allOrders
}

//Calcul des frais de stockage pour chaque semaine (coûts cumulés par semaine)
export function calcStorageCostsWeekly(currentStorageCosts, backorderCosts) {
    return currentStorageCosts + backorderCosts
}

//Calcul des coûts totaux de stockage avec quantité de stock
export function calcStorageCosts(previousWeekCosts, newStock){
    return previousWeekCosts + (newStock * stockCosts)
}

//Calcul des coûts totaux de stockage avec nombre de commandes en attente
export function calcStorageCostsBackorder(previousWeekCosts, backorder){
    return previousWeekCosts + (backorder * backorderCosts)
}

//Calcul du stock moyen
export function averageStock(sumStock, gameWeeks){
    return sumStock / (gameWeeks + 1)
}

//Calcul des semaines avec retard de livraison en pourcentage
export function backorderWeeksPct(weeksWithBackorders, gameWeeks){
    return weeksWithBackorders / gameWeeks
}


