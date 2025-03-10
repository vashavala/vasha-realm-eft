/*
  kappa amount
  Prapor: 40
  Therapist: 35
  Skier:
  PeaceKeeper:
  Mechanic:
  Ragman:
  Jeager:
*/
'use client'
import { useEffect, useRef, useState } from "react";
import { Header } from "@/biz-components";
import { Container } from "@/components";
import { useTranslation } from "@/utils/i18n";
import Image from "next/image";

type Arrow = string[]
type Cell = string | React.ReactElement

const QuestsPage = () => {
  const { t } = useTranslation()
  const colAmount = 30
  const rowAmount = 80
  // const colArr = Array.from({ length: colAmount }, (v, i) => i);
  // const rowArr = Array.from({ length: rowAmount }, (v, i) => i)
  const questArrow: Arrow[][] = Array.from({ length: rowAmount + 1 }).map(() => Array.from({ length: colAmount + 1 }, () => [""]))
  const questPos: Cell[][] = Array.from({ length: rowAmount + 1 }).map(() => Array.from({ length: colAmount + 1 }, () => ""))

  const PraporRowIdx = 3
  questPos[PraporRowIdx][1] = <Image src={'/images/portrait/Prapor.webp'} alt="" fill className="inset-0 object-contain object-center" />

  questPos[PraporRowIdx - 1][2] = t('quest.Shooting_Cans'); questArrow[PraporRowIdx - 1][2] = ['BL']
  questPos[PraporRowIdx - 1][3] = t('quest.Debut'); questArrow[PraporRowIdx - 1][3] = ['L']
  questPos[PraporRowIdx - 1][4] = t('quest.Luxurious_Life'); questArrow[PraporRowIdx - 1][4] = ['L']
  questPos[PraporRowIdx - 1][5] = t('quest.Background_Check'); questArrow[PraporRowIdx - 1][5] = ['L']
  questPos[PraporRowIdx - 1][6] = t('quest.Delivery_From_the_Past'); questArrow[PraporRowIdx - 1][6] = ['L']
  questPos[PraporRowIdx - 1][7] = t('quest.BP_Depot'); questArrow[PraporRowIdx - 1][7] = ['L']
  questPos[PraporRowIdx - 1][8] = t('quest.Bad_Rep_Evidence'); questArrow[PraporRowIdx - 1][8] = ['L']
  questPos[PraporRowIdx - 1][9] = t('quest.Ice_Cream_Cones'); questArrow[PraporRowIdx - 1][9] = ['L']
  questPos[PraporRowIdx - 1][10] = t('quest.Shaking_Up_the_Teller'); questArrow[PraporRowIdx - 1][10] = ['L']
  questPos[PraporRowIdx - 1][11] = t('quest.The_Punisher_-_Part_1'); questArrow[PraporRowIdx - 1][11] = ['L']
  questPos[PraporRowIdx - 1][12] = t('quest.The_Punisher_-_Part_2'); questArrow[PraporRowIdx - 1][12] = ['L']
  questPos[PraporRowIdx - 1][13] = t('quest.The_Punisher_-_Part_3'); questArrow[PraporRowIdx - 1][13] = ['L']
  questPos[PraporRowIdx - 1][14] = t('quest.The_Punisher_-_Part_4'); questArrow[PraporRowIdx - 1][14] = ['L']
  questPos[PraporRowIdx - 1][15] = t('quest.The_Punisher_-_Part_5'); questArrow[PraporRowIdx - 1][15] = ['L']
  questPos[PraporRowIdx - 1][16] = t('quest.The_Punisher_-_Part_6'); questArrow[PraporRowIdx - 1][16] = ['L']
  questPos[PraporRowIdx - 1][17] = t('quest.Intimidator'); questArrow[PraporRowIdx - 1][17] = ['L']

  questPos[PraporRowIdx + 1][2] = t('quest.Grenadier'); questArrow[PraporRowIdx + 1][2] = ['TL']
  questPos[PraporRowIdx + 1][3] = t('quest.Test_Drive_-_Part_1'); questArrow[PraporRowIdx + 1][3] = ['L']
  questPos[PraporRowIdx + 1][4] = t('quest.Test_Drive_-_Part_2'); questArrow[PraporRowIdx + 1][4] = ['L']
  questPos[PraporRowIdx + 1][5] = t('quest.Test_Drive_-_Part_3'); questArrow[PraporRowIdx + 1][5] = ['L']
  questPos[PraporRowIdx + 1][6] = t('quest.Test_Drive_-_Part_4'); questArrow[PraporRowIdx + 1][6] = ['L']
  questPos[PraporRowIdx + 1][7] = t('quest.Test_Drive_-_Part_5'); questArrow[PraporRowIdx + 1][7] = ['L']
  questPos[PraporRowIdx + 1][8] = t('quest.Test_Drive_-_Part_6'); questArrow[PraporRowIdx + 1][8] = ['L']

  questPos[PraporRowIdx - 2][3] = t('quest.Search_Mission'); questArrow[PraporRowIdx - 2][3] = ['B']

  questPos[PraporRowIdx - 2][5] = t('quest.Shootout_Picnic'); questArrow[PraporRowIdx - 2][5] = ['B']

  questPos[PraporRowIdx - 2][7] = t('quest.Belka_and_Strelka'); questArrow[PraporRowIdx - 2][7] = ['B']
  questPos[PraporRowIdx][7] = t('quest.The_Bunker_-_Part_1'); questArrow[PraporRowIdx][7] = ['T']
  questPos[PraporRowIdx][8] = t('quest.The_Bunker_-_Part_2'); questArrow[PraporRowIdx][8] = ['L']
  questPos[PraporRowIdx][9] = t('quest.No_Place_for_Renegades'); questArrow[PraporRowIdx][9] = ['L']
  questPos[PraporRowIdx][10] = t('quest.Documents'); questArrow[PraporRowIdx][10] = ['L']

  questPos[PraporRowIdx - 2][9] = t('quest.Postman_Pat_-_Part_1'); questArrow[PraporRowIdx - 2][9] = ['B']
  questPos[PraporRowIdx - 2][8] = t('quest.Postman_Pat_-_Part_2'); questArrow[PraporRowIdx - 2][8] = ['R']
  questPos[PraporRowIdx - 2][10] = t('quest.Possessor'); questArrow[PraporRowIdx - 2][10] = ['L']

  questPos[PraporRowIdx - 2][11] = t('quest.Anesthesia'); questArrow[PraporRowIdx - 2][11] = ['BL']
  questPos[PraporRowIdx - 2][12] = t('quest.Rigged_Game'); questArrow[PraporRowIdx - 2][12] = ['L']

  questPos[PraporRowIdx][11] = t('quest.Perfect_Mediator'); questArrow[PraporRowIdx][11] = ['TL']

  questPos[PraporRowIdx][12] = t('quest.Easy_Job_-_Part_1'); questArrow[PraporRowIdx][12] = ['T']
  questPos[PraporRowIdx][13] = t('quest.Easy_Job_-_Part_2'); questArrow[PraporRowIdx][13] = ['L']
  questPos[PraporRowIdx + 1][12] = t('quest.Reconnaissance'); questArrow[PraporRowIdx + 1][12] = ['T']


  const TherapistRowIdx = PraporRowIdx + 5
  questPos[TherapistRowIdx][1] = <Image src={'/images/portrait/Therapist.webp'} alt="" fill className="inset-0 object-contain object-center" />
  questPos[TherapistRowIdx][2] = t('quest.First_in_Line'); questArrow[TherapistRowIdx][2] = ['L']
  questPos[TherapistRowIdx][3] = t('quest.Shortage'); questArrow[TherapistRowIdx][3] = ['L']
  questPos[TherapistRowIdx][4] = t('quest.Sanitary_Standards_-_Part_1'); questArrow[TherapistRowIdx][4] = ['L']
  questPos[TherapistRowIdx][5] = t('quest.Sanitary_Standards_-_Part_2'); questArrow[TherapistRowIdx][5] = ['L']
  questPos[TherapistRowIdx][6] = t('quest.Painkiller'); questArrow[TherapistRowIdx][6] = ['L']
  questPos[TherapistRowIdx][7] = t('quest.Pharmacist'); questArrow[TherapistRowIdx][7] = ['L']
  questPos[TherapistRowIdx][8] = t('quest.Health_Care_Privacy_-_Part_1'); questArrow[TherapistRowIdx][8] = ['L']
  questPos[TherapistRowIdx][9] = t('quest.Health_Care_Privacy_-_Part_2'); questArrow[TherapistRowIdx][9] = ['L']
  questPos[TherapistRowIdx][10] = t('quest.Health_Care_Privacy_-_Part_3'); questArrow[TherapistRowIdx][10] = ['L']
  questPos[TherapistRowIdx][11] = t('quest.Health_Care_Privacy_-_Part_4'); questArrow[TherapistRowIdx][11] = ['L']
  questPos[TherapistRowIdx][12] = t('quest.Health_Care_Privacy_-_Part_5'); questArrow[TherapistRowIdx][12] = ['L']
  questPos[TherapistRowIdx][13] = t('quest.Health_Care_Privacy_-_Part_6'); questArrow[TherapistRowIdx][13] = ['L']

  questPos[TherapistRowIdx - 1][3] = t('quest.Operation_Aquarius_-_Part_1'); questArrow[TherapistRowIdx - 1][3] = ['B']
  questPos[TherapistRowIdx - 1][4] = t('quest.Operation_Aquarius_-_Part_2'); questArrow[TherapistRowIdx - 1][4] = ['L']

  questPos[TherapistRowIdx - 2][7] = t('quest.Disease_History'); questArrow[TherapistRowIdx - 2][7] = ['B']; questArrow[TherapistRowIdx - 1][7] = ['B']
  questPos[TherapistRowIdx - 2][8] = t('quest.Seaside_Vacation'); questArrow[TherapistRowIdx - 2][8] = ['L']
  questPos[TherapistRowIdx - 2][9] = t('quest.Abandoned_Cargo'); questArrow[TherapistRowIdx - 2][9] = ['L']
  questPos[TherapistRowIdx - 2][10] = t('quest.Shipment_Tracking'); questArrow[TherapistRowIdx - 2][10] = ['L']
  questPos[TherapistRowIdx - 2][11] = t('quest.Closer_to_the_People'); questArrow[TherapistRowIdx - 2][11] = ['L']

  questPos[TherapistRowIdx + 2][7] = t('quest.General_Wares'); questArrow[TherapistRowIdx + 2][7] = ['T']; questArrow[TherapistRowIdx + 1][7] = ['T']
  questPos[TherapistRowIdx + 2][8] = t('quest.Colleagues_-_Part_1'); questArrow[TherapistRowIdx + 2][8] = ['L']
  questPos[TherapistRowIdx + 2][9] = t('quest.Colleagues_-_Part_2'); questArrow[TherapistRowIdx + 2][9] = ['L']
  questPos[TherapistRowIdx + 2][10] = t('quest.Colleagues_-_Part_3'); questArrow[TherapistRowIdx + 2][10] = ['L']
  questPos[TherapistRowIdx + 1][10] = t('quest.The_Huntsman_Path_-_Sadist'); questArrow[TherapistRowIdx + 1][10] = ['BL']

  questPos[TherapistRowIdx - 1][8] = t('quest.Supply_Plans'); questArrow[TherapistRowIdx - 1][8] = ['BL']
  questPos[TherapistRowIdx + 1][8] = t('quest.Kind_of_Sabotage'); questArrow[TherapistRowIdx + 1][8] = ['TL']

  questPos[TherapistRowIdx + 1][6] = t('quest.Car_Repair'); questArrow[TherapistRowIdx + 1][6] = ['TR']

  questPos[TherapistRowIdx - 1][9] = t('quest.Lost_Contact'); questArrow[TherapistRowIdx - 1][9] = ['B']
  questPos[TherapistRowIdx - 1][10] = t('quest.Drug_Trafficking'); questArrow[TherapistRowIdx - 1][10] = ['L']

  questPos[TherapistRowIdx - 1][11] = t('quest.Private_Clinic'); questArrow[TherapistRowIdx - 1][11] = ['B']
  questPos[TherapistRowIdx - 1][12] = t('quest.Decontamination_Service'); questArrow[TherapistRowIdx - 1][12] = ['L']

  questPos[TherapistRowIdx + 1][11] = t('quest.Athlete'); questArrow[TherapistRowIdx + 1][11] = ['T']
  questPos[TherapistRowIdx + 1][12] = t('quest.Crisis'); questArrow[TherapistRowIdx + 1][12] = ['L']


  const SkierRowIdx = TherapistRowIdx + 5
  questPos[SkierRowIdx][1] = <Image src={'/images/portrait/Skier.webp'} alt="" fill className="inset-0 object-contain object-center" />
  questPos[SkierRowIdx][2] = t('quest.Burning_Rubber'); questArrow[SkierRowIdx][2] = ['L']
  questPos[SkierRowIdx][3] = t('quest.Supplier'); questArrow[SkierRowIdx][3] = ['L']

  questPos[SkierRowIdx - 1][4] = t('quest.The_Extortionist'); questArrow[SkierRowIdx - 1][4] = ['BL']
  questPos[SkierRowIdx - 1][5] = t('quest.Whats_on_the_Flash_Drive'); questArrow[SkierRowIdx - 1][5] = ['L']
  questPos[SkierRowIdx - 1][6] = t('quest.Golden_Swag'); questArrow[SkierRowIdx - 1][6] = ['L']
  questPos[SkierRowIdx - 1][7] = t('quest.Chemical_-_Part_1'); questArrow[SkierRowIdx - 1][7] = ['L']
  questPos[SkierRowIdx - 1][8] = t('quest.Chemical_-_Part_2'); questArrow[SkierRowIdx - 1][8] = ['L']
  questPos[SkierRowIdx - 1][9] = t('quest.Chemical_-_Part_3'); questArrow[SkierRowIdx - 1][9] = ['L']
  questPos[SkierRowIdx - 2][10] = t('quest.Big_Customer'); questArrow[SkierRowIdx - 2][10] = ['BL']
  questPos[SkierRowIdx - 1][10] = t('quest.Chemical_-_Part_4'); questArrow[SkierRowIdx - 1][10] = ['L']
  questPos[SkierRowIdx][10] = t('quest.Out_of_Curiosity'); questArrow[SkierRowIdx][10] = ['TL']

  questPos[SkierRowIdx - 1][11] = t('quest.Safe_Corridor'); questArrow[SkierRowIdx - 1][11] = ['L']

  questPos[SkierRowIdx][9] = t('quest.Vitamins_-_Part_1'); questArrow[SkierRowIdx][9] = ['T']
  questPos[SkierRowIdx][8] = t('quest.Vitamins_-_Part_2'); questArrow[SkierRowIdx][8] = ['R']

  questPos[SkierRowIdx][4] = t('quest.Stirrup'); questArrow[SkierRowIdx][4] = ['L']

  questPos[SkierRowIdx + 1][4] = t('quest.Friend_From_the_West_-_Part_1'); questArrow[SkierRowIdx + 1][4] = ['TL']
  questPos[SkierRowIdx + 1][5] = t('quest.Friend_From_the_West_-_Part_2'); questArrow[SkierRowIdx + 1][5] = ['L']
  questPos[SkierRowIdx + 1][6] = t('quest.Setup'); questArrow[SkierRowIdx + 1][6] = ['L']
  questPos[SkierRowIdx + 1][7] = t('quest.Informed_Means_Armed'); questArrow[SkierRowIdx + 1][7] = ['L']
  questPos[SkierRowIdx + 1][8] = t('quest.Chumming'); questArrow[SkierRowIdx + 1][8] = ['L']
  questPos[SkierRowIdx + 1][9] = t('quest.Flint'); questArrow[SkierRowIdx + 1][9] = ['L']

  questPos[SkierRowIdx][5] = t('quest.Long_Road'); questArrow[SkierRowIdx][5] = ['B']
  questPos[SkierRowIdx][6] = t('quest.Missing_Cargo'); questArrow[SkierRowIdx][6] = ['L']

  questPos[SkierRowIdx + 2][5] = t('quest.Lend-Lease_-_Part_1'); questArrow[SkierRowIdx + 2][5] = ['T']
  questPos[SkierRowIdx + 2][6] = t('quest.Lend-Lease_-_Part_2'); questArrow[SkierRowIdx + 2][6] = ['L']
  questPos[SkierRowIdx + 2][7] = t('quest.Peacekeeping_Mission'); questArrow[SkierRowIdx + 2][7] = ['L']

  questPos[SkierRowIdx + 2][8] = t('quest.Private_Club'); questArrow[SkierRowIdx + 2][8] = ['T']


  const PeaceKeeperRowIdx = SkierRowIdx + 5
  questPos[PeaceKeeperRowIdx][1] = <Image src={'/images/portrait/PeaceKeeper.webp'} alt="" fill className="inset-0 object-contain object-center" />
  questPos[PeaceKeeperRowIdx][2] = t('quest.Fishing_Gear'); questArrow[PeaceKeeperRowIdx][2] = ['L']
  questPos[PeaceKeeperRowIdx][3] = t('quest.Tigr_Safari'); questArrow[PeaceKeeperRowIdx][3] = ['L']
  questPos[PeaceKeeperRowIdx][4] = t('quest.Scrap_Metal'); questArrow[PeaceKeeperRowIdx][4] = ['L']
  questPos[PeaceKeeperRowIdx][5] = t('quest.Eagle_Eye'); questArrow[PeaceKeeperRowIdx][5] = ['L']
  questPos[PeaceKeeperRowIdx][6] = t('quest.Humanitarian_Supplies'); questArrow[PeaceKeeperRowIdx][6] = ['L']
  questPos[PeaceKeeperRowIdx][7] = t('quest.Spa_Tour_-_Part_1'); questArrow[PeaceKeeperRowIdx][7] = ['L']
  questPos[PeaceKeeperRowIdx][8] = t('quest.Spa_Tour_-_Part_2'); questArrow[PeaceKeeperRowIdx][8] = ['L']
  questPos[PeaceKeeperRowIdx][9] = t('quest.Spa_Tour_-_Part_3'); questArrow[PeaceKeeperRowIdx][9] = ['L']
  questPos[PeaceKeeperRowIdx][10] = t('quest.Spa_Tour_-_Part_4'); questArrow[PeaceKeeperRowIdx][10] = ['L']
  questPos[PeaceKeeperRowIdx][11] = t('quest.Spa_Tour_-_Part_5'); questArrow[PeaceKeeperRowIdx][11] = ['L']
  questPos[PeaceKeeperRowIdx][12] = t('quest.Spa_Tour_-_Part_6'); questArrow[PeaceKeeperRowIdx][12] = ['L']
  questPos[PeaceKeeperRowIdx][13] = t('quest.Spa_Tour_-_Part_7'); questArrow[PeaceKeeperRowIdx][13] = ['L']
  questPos[PeaceKeeperRowIdx][14] = t('quest.Wet_Job_-_Part_1'); questArrow[PeaceKeeperRowIdx][14] = ['L']
  questPos[PeaceKeeperRowIdx][15] = t('quest.Wet_Job_-_Part_2'); questArrow[PeaceKeeperRowIdx][15] = ['L']
  questPos[PeaceKeeperRowIdx][16] = t('quest.Wet_Job_-_Part_3'); questArrow[PeaceKeeperRowIdx][16] = ['L']
  questPos[PeaceKeeperRowIdx][17] = t('quest.Wet_Job_-_Part_4'); questArrow[PeaceKeeperRowIdx][17] = ['L']
  questPos[PeaceKeeperRowIdx][18] = t('quest.Wet_Job_-_Part_5'); questArrow[PeaceKeeperRowIdx][18] = ['L']
  questPos[PeaceKeeperRowIdx][19] = t('quest.Wet_Job_-_Part_6'); questArrow[PeaceKeeperRowIdx][19] = ['L']
  questPos[PeaceKeeperRowIdx][20] = t('quest.The_Guide'); questArrow[PeaceKeeperRowIdx][20] = ['L']

  questPos[PeaceKeeperRowIdx + 1][2] = t('quest.Samples'); questArrow[PeaceKeeperRowIdx + 1][2] = ['T']
  questPos[PeaceKeeperRowIdx + 1][3] = t('quest.TerraGroup_Employee'); questArrow[PeaceKeeperRowIdx + 1][3] = ['L']

  questPos[PeaceKeeperRowIdx - 1][5] = t('quest.The_Cult_-_Part_2'); questArrow[PeaceKeeperRowIdx - 1][5] = ['R']
  questPos[PeaceKeeperRowIdx - 1][6] = t('quest.The_Cult_-_Part_1'); questArrow[PeaceKeeperRowIdx - 1][6] = ['B']
  questPos[PeaceKeeperRowIdx - 1][7] = t('quest.Overpopulation'); questArrow[PeaceKeeperRowIdx - 1][7] = ['B']
  questPos[PeaceKeeperRowIdx - 1][8] = t('quest.One_Less_Loose_End'); questArrow[PeaceKeeperRowIdx - 1][8] = ['L']

  questPos[PeaceKeeperRowIdx + 1][5] = t('quest.Revision_-_Lighthouse'); questArrow[PeaceKeeperRowIdx + 1][5] = ['R']
  questPos[PeaceKeeperRowIdx + 1][6] = t('quest.Revision_-_Reserve'); questArrow[PeaceKeeperRowIdx + 1][6] = ['T']
  questPos[PeaceKeeperRowIdx + 1][7] = t('quest.Classified_Technologies'); questArrow[PeaceKeeperRowIdx + 1][7] = ['L']

  questPos[PeaceKeeperRowIdx + 1][13] = t('quest.Cargo_X_-_Part_1'); questArrow[PeaceKeeperRowIdx + 1][13] = ['T']
  questPos[PeaceKeeperRowIdx + 1][14] = t('quest.Cargo_X_-_Part_2'); questArrow[PeaceKeeperRowIdx + 1][14] = ['L']
  questPos[PeaceKeeperRowIdx + 1][15] = t('quest.Cargo_X_-_Part_3'); questArrow[PeaceKeeperRowIdx + 1][15] = ['L']
  questPos[PeaceKeeperRowIdx + 1][16] = t('quest.Cargo_X_-_Part_4'); questArrow[PeaceKeeperRowIdx + 1][16] = ['L']
  questPos[PeaceKeeperRowIdx + 1][17] = t('quest.Insomnia'); questArrow[PeaceKeeperRowIdx + 1][17] = ['L']


  const MechanicRowIdx = PeaceKeeperRowIdx + 5
  questPos[MechanicRowIdx][1] = <Image src={'/images/portrait/Mechanic.webp'} alt="" fill className="inset-0 object-contain object-center" />
  questPos[MechanicRowIdx][2] = t('quest.Saving_the_Mole'); questArrow[MechanicRowIdx][2] = ['L']
  questPos[MechanicRowIdx][3] = t('quest.Gunsmith_-_Part_1'); questArrow[MechanicRowIdx][3] = ['L']

  questPos[MechanicRowIdx + 1][3] = t('quest.Introduction'); questArrow[MechanicRowIdx + 1][3] = ['T']

  questPos[MechanicRowIdx - 2][3] = t('quest.Farming_-_Part_1'); questArrow[MechanicRowIdx - 2][3] = ['B']; questArrow[MechanicRowIdx - 1][3] = ['B']
  questPos[MechanicRowIdx - 2][4] = t('quest.Farming_-_Part_2'); questArrow[MechanicRowIdx - 2][4] = ['L']
  questPos[MechanicRowIdx - 2][5] = t('quest.Farming_-_Part_3'); questArrow[MechanicRowIdx - 2][5] = ['L']
  questPos[MechanicRowIdx - 2][6] = t('quest.Farming_-_Part_4'); questArrow[MechanicRowIdx - 2][6] = ['L']
  questPos[MechanicRowIdx - 2][7] = t('quest.Fertilizers'); questArrow[MechanicRowIdx - 2][7] = ['L']

  questPos[MechanicRowIdx - 1][4] = t('quest.Passion_for_Ergonomics'); questArrow[MechanicRowIdx - 1][4] = ['T']
  questPos[MechanicRowIdx - 3][4] = t('quest.Broadcast_-_Part_1'); questArrow[MechanicRowIdx - 3][4] = ['B']
  questPos[MechanicRowIdx - 3][3] = t('quest.Bad_Habit'); questArrow[MechanicRowIdx - 3][3] = ['BR']

  questPos[MechanicRowIdx - 1][5] = t('quest.Corporate_Secrets'); questArrow[MechanicRowIdx - 1][5] = ['T']
  questPos[MechanicRowIdx - 3][5] = t('quest.A_Shooter_Born_in_Heaven'); questArrow[MechanicRowIdx - 3][5] = ['B']

  questPos[MechanicRowIdx - 1][6] = t('quest.Import'); questArrow[MechanicRowIdx - 1][6] = ['T']
  questPos[MechanicRowIdx - 3][6] = t('quest.Energy_Crisis'); questArrow[MechanicRowIdx - 3][6] = ['B']

  questPos[MechanicRowIdx + 1][4] = t('quest.Gunsmith_-_Part_2'); questArrow[MechanicRowIdx + 1][4] = ['TL']
  questPos[MechanicRowIdx + 2][4] = t('quest.Signal_-_Part_1'); questArrow[MechanicRowIdx + 2][4] = ['T']
  questPos[MechanicRowIdx + 3][4] = t('quest.Insider'); questArrow[MechanicRowIdx + 3][4] = ['T']
  questPos[MechanicRowIdx + 2][5] = t('quest.Signal_-_Part_2'); questArrow[MechanicRowIdx + 2][5] = ['L']
  questPos[MechanicRowIdx + 1][6] = t('quest.Signal_-_Part_3'); questArrow[MechanicRowIdx + 1][6] = ['BL']
  questPos[MechanicRowIdx + 1][7] = t('quest.Signal_-_Part_4'); questArrow[MechanicRowIdx + 1][7] = ['L']

  questPos[MechanicRowIdx + 3][6] = t('quest.Scout'); questArrow[MechanicRowIdx + 3][6] = ['TL']
  questPos[MechanicRowIdx + 3][7] = t('quest.Black_Swan'); questArrow[MechanicRowIdx + 3][7] = ['L']
  questPos[MechanicRowIdx + 3][8] = t('quest.Forklift_Certified'); questArrow[MechanicRowIdx + 3][8] = ['L']
  questPos[MechanicRowIdx + 3][9] = t('quest.Capacity_Check'); questArrow[MechanicRowIdx + 3][9] = ['L']
  questPos[MechanicRowIdx + 3][10] = t('quest.All_Is_Revealed'); questArrow[MechanicRowIdx + 3][10] = ['L']

  questPos[MechanicRowIdx + 2][7] = t('quest.Back_Door'); questArrow[MechanicRowIdx + 2][7] = ['BL']
  questPos[MechanicRowIdx + 2][8] = t('quest.Surplus_Goods'); questArrow[MechanicRowIdx + 2][8] = ['L']

  questPos[MechanicRowIdx + 4][7] = t('quest.Exit_Here'); questArrow[MechanicRowIdx + 4][7] = ['TL']
  questPos[MechanicRowIdx + 4][8] = t('quest.The_Walls_Have_Eyes'); questArrow[MechanicRowIdx + 4][8] = ['L']

  questPos[MechanicRowIdx][4] = t('quest.Gunsmith_-_Part_3'); questArrow[MechanicRowIdx][4] = ['L']
  questPos[MechanicRowIdx][5] = t('quest.Gunsmith_-_Part_4'); questArrow[MechanicRowIdx][5] = ['L', 'BL']
  questPos[MechanicRowIdx][6] = t('quest.Gunsmith_-_Part_5'); questArrow[MechanicRowIdx][6] = ['L']
  questPos[MechanicRowIdx][7] = t('quest.Gunsmith_-_Part_6'); questArrow[MechanicRowIdx][7] = ['L']
  questPos[MechanicRowIdx][8] = t('quest.Gunsmith_-_Part_7'); questArrow[MechanicRowIdx][8] = ['L']
  questPos[MechanicRowIdx][9] = t('quest.Gunsmith_-_Part_8'); questArrow[MechanicRowIdx][9] = ['L']
  questPos[MechanicRowIdx][10] = t('quest.Gunsmith_-_Part_9'); questArrow[MechanicRowIdx][10] = ['L']
  questPos[MechanicRowIdx][11] = t('quest.Gunsmith_-_Part_10'); questArrow[MechanicRowIdx][11] = ['L']
  questPos[MechanicRowIdx][12] = t('quest.Gunsmith_-_Part_11'); questArrow[MechanicRowIdx][12] = ['L']
  questPos[MechanicRowIdx][13] = t('quest.Gunsmith_-_Part_12'); questArrow[MechanicRowIdx][13] = ['L']
  questPos[MechanicRowIdx][14] = t('quest.Gunsmith_-_Part_13'); questArrow[MechanicRowIdx][14] = ['L']
  questPos[MechanicRowIdx][15] = t('quest.Gunsmith_-_Part_14'); questArrow[MechanicRowIdx][15] = ['L']
  questPos[MechanicRowIdx][16] = t('quest.Gunsmith_-_Part_15'); questArrow[MechanicRowIdx][16] = ['L']
  questPos[MechanicRowIdx][17] = t('quest.Gunsmith_-_Part_16'); questArrow[MechanicRowIdx][17] = ['L']
  questPos[MechanicRowIdx][18] = t('quest.Gunsmith_-_Part_17'); questArrow[MechanicRowIdx][18] = ['L']
  questPos[MechanicRowIdx][19] = t('quest.Gunsmith_-_Part_18'); questArrow[MechanicRowIdx][19] = ['L']
  questPos[MechanicRowIdx][20] = t('quest.Gunsmith_-_Part_19'); questArrow[MechanicRowIdx][20] = ['L']
  questPos[MechanicRowIdx][21] = t('quest.Gunsmith_-_Part_20'); questArrow[MechanicRowIdx][21] = ['L']
  questPos[MechanicRowIdx][22] = t('quest.Gunsmith_-_Part_21'); questArrow[MechanicRowIdx][22] = ['L']
  questPos[MechanicRowIdx][23] = t('quest.Gunsmith_-_Part_22'); questArrow[MechanicRowIdx][23] = ['L']


  const RagmanRowIdx = MechanicRowIdx + 8
  questPos[RagmanRowIdx][1] = <Image src={'/images/portrait/Ragman.webp'} alt="" fill className="inset-0 object-contain object-center" />
  questPos[RagmanRowIdx][2] = t('quest.Only_Business'); questArrow[RagmanRowIdx][2] = ['L']

  questPos[RagmanRowIdx - 1][3] = t('quest.Make_ULTRA_Great_Again'); questArrow[RagmanRowIdx - 1][3] = ['BL']
  questPos[RagmanRowIdx - 1][4] = t('quest.The_Blood_of_War_-_Part_1'); questArrow[RagmanRowIdx - 1][4] = ['L']
  questPos[RagmanRowIdx - 2][4] = t('quest.The_Blood_of_War_-_Part_2'); questArrow[RagmanRowIdx - 2][4] = ['B']
  questPos[RagmanRowIdx - 2][5] = t('quest.The_Blood_of_War_-_Part_3'); questArrow[RagmanRowIdx - 2][5] = ['L']
  questPos[RagmanRowIdx - 1][5] = t('quest.Dressed_to_Kill'); questArrow[RagmanRowIdx - 1][5] = ['L']
  questPos[RagmanRowIdx - 1][6] = t('quest.Gratitude'); questArrow[RagmanRowIdx - 1][6] = ['L']

  questPos[RagmanRowIdx - 2][3] = t('quest.Break_the_Deal'); questArrow[RagmanRowIdx - 2][3] = ['B']


  questPos[RagmanRowIdx - 2][7] = t('quest.Sales_Night'); questArrow[RagmanRowIdx - 2][7] = ['BL']
  questPos[RagmanRowIdx - 2][8] = t('quest.Supervisor'); questArrow[RagmanRowIdx - 2][8] = ['L']

  questPos[RagmanRowIdx][7] = t('quest.Hot_Delivery'); questArrow[RagmanRowIdx][7] = ['TL']
  questPos[RagmanRowIdx][8] = t('quest.Scavenger'); questArrow[RagmanRowIdx][8] = ['L']

  questPos[RagmanRowIdx][4] = t('quest.A_Fuel_Matter'); questArrow[RagmanRowIdx][4] = ['T']
  questPos[RagmanRowIdx][5] = t('quest.Inventory_Check'); questArrow[RagmanRowIdx][5] = ['L']

  questPos[RagmanRowIdx + 1][3] = t('quest.Big_Sale'); questArrow[RagmanRowIdx + 1][3] = ['TL']
  questPos[RagmanRowIdx + 1][4] = t('quest.Database_-_Part_1'); questArrow[RagmanRowIdx + 1][4] = ['L']
  questPos[RagmanRowIdx + 1][5] = t('quest.Database_-_Part_2'); questArrow[RagmanRowIdx + 1][5] = ['L']
  questPos[RagmanRowIdx + 1][6] = t('quest.Sew_it_Good_-_Part_1'); questArrow[RagmanRowIdx + 1][6] = ['L']
  questPos[RagmanRowIdx + 1][7] = t('quest.Sew_it_Good_-_Part_2'); questArrow[RagmanRowIdx + 1][7] = ['L']
  questPos[RagmanRowIdx + 1][8] = t('quest.Sew_it_Good_-_Part_3'); questArrow[RagmanRowIdx + 1][8] = ['L']
  questPos[RagmanRowIdx + 1][9] = t('quest.Sew_it_Good_-_Part_4'); questArrow[RagmanRowIdx + 1][9] = ['L']
  questPos[RagmanRowIdx + 1][10] = t('quest.Charisma_Brings_Success'); questArrow[RagmanRowIdx + 1][10] = ['L']

  questPos[RagmanRowIdx + 2][6] = t('quest.Minibus'); questArrow[RagmanRowIdx + 2][6] = ['T']

  questPos[RagmanRowIdx + 2][7] = t('quest.The_Key_to_Success'); questArrow[RagmanRowIdx + 2][7] = ['T']
  questPos[RagmanRowIdx + 3][7] = t('quest.No_Fuss_Needed'); questArrow[RagmanRowIdx + 3][7] = ['T']

  questPos[RagmanRowIdx + 2][8] = t('quest.Living_High_is_Not_a_Crime_-_Part_1'); questArrow[RagmanRowIdx + 2][8] = ['T']
  questPos[RagmanRowIdx + 3][8] = t('quest.Living_High_is_Not_a_Crime_-_Part_2'); questArrow[RagmanRowIdx + 3][8] = ['T']


  const JeagerRowIdx = RagmanRowIdx + 8
  questPos[JeagerRowIdx][1] = <Image src={'/images/portrait/Jeager.webp'} alt="" fill className="inset-0 object-contain object-center" />
  questPos[JeagerRowIdx][2] = t('quest.Acquaintance'); questArrow[JeagerRowIdx][2] = ['L']

  questPos[JeagerRowIdx - 1][3] = t('quest.Work_Smarter'); questArrow[JeagerRowIdx - 1][3] = ['BL']
  questPos[JeagerRowIdx - 1][4] = t('quest.Rite_of_Passage'); questArrow[JeagerRowIdx - 1][4] = ['L']

  questPos[JeagerRowIdx - 1][2] = t('quest.Shady_Business'); questArrow[JeagerRowIdx - 1][2] = ['B']
  questPos[JeagerRowIdx - 2][2] = t('quest.Ambulance'); questArrow[JeagerRowIdx - 2][2] = ['B']

  questPos[JeagerRowIdx + 1][3] = t('quest.Rough_Tarkov'); questArrow[JeagerRowIdx + 1][3] = ['TL']
  questPos[JeagerRowIdx + 1][4] = t('quest.Every_Hunter_Knows_This'); questArrow[JeagerRowIdx + 1][4] = ['L']
  
  questPos[JeagerRowIdx + 2][2] = t('quest.The_Tarkov_Shooter_-_Part_1'); questArrow[JeagerRowIdx + 2][2] = ['T'];  questArrow[JeagerRowIdx + 1][2] = ['T']
  questPos[JeagerRowIdx + 2][3] = t('quest.The_Tarkov_Shooter_-_Part_2'); questArrow[JeagerRowIdx + 2][3] = ['L'];
  questPos[JeagerRowIdx + 2][4] = t('quest.The_Tarkov_Shooter_-_Part_3'); questArrow[JeagerRowIdx + 2][4] = ['L'];
  questPos[JeagerRowIdx + 2][5] = t('quest.The_Tarkov_Shooter_-_Part_4'); questArrow[JeagerRowIdx + 2][5] = ['L'];
  questPos[JeagerRowIdx + 2][6] = t('quest.The_Tarkov_Shooter_-_Part_5'); questArrow[JeagerRowIdx + 2][6] = ['L'];
  questPos[JeagerRowIdx + 2][7] = t('quest.The_Tarkov_Shooter_-_Part_6'); questArrow[JeagerRowIdx + 2][7] = ['L'];
  questPos[JeagerRowIdx + 2][8] = t('quest.The_Tarkov_Shooter_-_Part_7'); questArrow[JeagerRowIdx + 2][8] = ['L'];
  questPos[JeagerRowIdx + 2][9] = t('quest.The_Tarkov_Shooter_-_Part_8'); questArrow[JeagerRowIdx + 2][9] = ['L'];

  questPos[JeagerRowIdx][3] = t('quest.The_Survivalist_Path_-_Unprotected_but_Dangerous'); questArrow[JeagerRowIdx][3] = ['L']
  questPos[JeagerRowIdx][4] = t('quest.The_Survivalist_Path_-_Thrifty'); questArrow[JeagerRowIdx][4] = ['L']

  questPos[JeagerRowIdx + 1][5] = t('quest.The_Delicious_Sausage'); questArrow[JeagerRowIdx + 1][5] = ['TL']
  questPos[JeagerRowIdx + 1][6] = t('quest.Reserve'); questArrow[JeagerRowIdx + 1][6] = ['L']
  questPos[JeagerRowIdx + 1][7] = t('quest.Pest_Control'); questArrow[JeagerRowIdx + 1][7] = ['L']
  questPos[JeagerRowIdx + 1][8] = t('quest.The_Huntsman_Path_-_Eraser_-_Part_1'); questArrow[JeagerRowIdx + 1][8] = ['L']
  questPos[JeagerRowIdx + 1][9] = t('quest.The_Huntsman_Path_-_Eraser_-_Part_2'); questArrow[JeagerRowIdx + 1][9] = ['L']

  questPos[JeagerRowIdx - 1][5] = t('quest.The_Survivalist_Path_-_Zhivchik'); questArrow[JeagerRowIdx - 1][5] = ['BL']
  questPos[JeagerRowIdx - 1][6] = t('quest.The_Survivalist_Path_-_Wounded_Beast'); questArrow[JeagerRowIdx - 1][6] = ['L']
  questPos[JeagerRowIdx - 1][7] = t('quest.The_Survivalist_Path_-_Tough_Guy'); questArrow[JeagerRowIdx - 1][7] = ['L']
  questPos[JeagerRowIdx - 1][8] = t('quest.The_Survivalist_Path_-_Eagle-Owl'); questArrow[JeagerRowIdx - 1][8] = ['L']
  questPos[JeagerRowIdx - 1][9] = t('quest.The_Survivalist_Path_-_Combat_Medic'); questArrow[JeagerRowIdx - 1][9] = ['L']
  questPos[JeagerRowIdx - 1][10] = t('quest.The_Survivalist_Path_-_Junkie'); questArrow[JeagerRowIdx - 1][10] = ['L']

  questPos[JeagerRowIdx][7] = t('quest.The_Hermit'); questArrow[JeagerRowIdx][7] = ['T']

  questPos[JeagerRowIdx][8] = t('quest.Courtesy_Visit'); questArrow[JeagerRowIdx][8] = ['TL']
  questPos[JeagerRowIdx][9] = t('quest.Nostalgia'); questArrow[JeagerRowIdx][9] = ['L']
  questPos[JeagerRowIdx][10] = t('quest.Fishing_Place'); questArrow[JeagerRowIdx][10] = ['L']

  questPos[JeagerRowIdx - 2][7] = t('quest.The_Huntsman_Path_-_Secured_Perimeter'); questArrow[JeagerRowIdx - 2][7] = ['B']
  questPos[JeagerRowIdx - 2][6] = t('quest.The_Huntsman_Path_-_Woods_Keeper'); questArrow[JeagerRowIdx - 2][6] = ['R']
  questPos[JeagerRowIdx - 2][5] = t('quest.Hunting_Trip'); questArrow[JeagerRowIdx - 2][5] = ['R']

  questPos[JeagerRowIdx - 3][6] = t('quest.The_Huntsman_Path_-_Trophy'); questArrow[JeagerRowIdx - 3][6] = ['BR']
  questPos[JeagerRowIdx - 3][7] = t('quest.The_Huntsman_Path_-_Justice'); questArrow[JeagerRowIdx - 3][7] = ['B']

  questPos[JeagerRowIdx - 2][11] = t('quest.The_Huntsman_Path_-_Forest_Cleaning');
  questArrow[JeagerRowIdx - 2][8] = ['L']; questArrow[JeagerRowIdx - 2][9] = ['L']; questArrow[JeagerRowIdx - 2][10] = ['L']; questArrow[JeagerRowIdx - 2][11] = ['L'];
  questPos[JeagerRowIdx - 3][10] = t('quest.Claustrophobia'); questArrow[JeagerRowIdx - 3][10] = ['BR'];
  questPos[JeagerRowIdx - 3][11] = t('quest.The_Huntsman_Path_-_Outcasts'); questArrow[JeagerRowIdx - 3][11] = ['B'];
  questPos[JeagerRowIdx - 3][12] = t('quest.The_Huntsman_Path_-_Evil_Watchman'); questArrow[JeagerRowIdx - 3][12] = ['BL'];
  questPos[JeagerRowIdx - 2][12] = t('quest.The_Huntsman_Path_-_Sellout'); questArrow[JeagerRowIdx - 2][12] = ['L'];
  questPos[JeagerRowIdx - 2][13] = t('quest.Stray_Dogs'); questArrow[JeagerRowIdx - 2][13] = ['L'];
  questPos[JeagerRowIdx - 1][12] = t('quest.The_Huntsman_Path_-_Factory_Chief'); questArrow[JeagerRowIdx - 1][12] = ['TL'];
  questPos[JeagerRowIdx - 1][11] = t('quest.The_Huntsman_Path_-_Controller'); questArrow[JeagerRowIdx - 1][11] = ['T'];


  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const scrollTopRef = useRef(0);

  // 用于触发重新渲染的光标状态
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    // 初始化拖拽状态
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    scrollLeftRef.current = container.scrollLeft;
    scrollTopRef.current = container.scrollTop;

    // 防止文本选中
    e.preventDefault();
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      // 计算滚动距离
      const deltaX = e.clientX - startXRef.current;
      const deltaY = e.clientY - startYRef.current;

      // 更新滚动位置
      if (containerRef.current) {
        containerRef.current.scrollLeft = scrollLeftRef.current - deltaX;
        containerRef.current.scrollTop = scrollTopRef.current - deltaY;
      }
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;

      // 重置状态
      isDraggingRef.current = false;
      setIsDragging(false);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };

    // 绑定全局事件
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  return (
    <Container>
      <Header />
      <div
        ref={containerRef}
        className={`size-full overflow-auto relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
      >
        {/* {rowArr.map(row => <div key={row} className="whitespace-nowrap">
          {colArr.map(col => <div key={col} className="inline-block align-middle aspect-square outline w-[12rem]"></div>)}
        </div>)} */}
        {questArrow.map(
          (row, rowIdx) => row.map(
            (col, colIdx) => col &&
              col.map((arrow, arrowIdx) => (
                <div
                  key={`${rowIdx}-${colIdx}-${arrowIdx}`}
                  className="w-[12rem] h-[.5rem] bg-[var(--tc)] absolute origin-left"
                  style={
                    arrow === 'L' ? { top: `${rowIdx * 12 - 0.5 * 1 / 2}rem`, left: `${(colIdx - 1) * 12}rem` } :
                      arrow === 'R' ? { top: `${rowIdx * 12 - 0.5 * 1 / 2}rem`, left: `${colIdx * 12}rem` } :
                        arrow === 'T' ? { top: `${rowIdx * 12 - 0.5 * 1 / 2}rem`, left: `${colIdx * 12}rem`, transform: `rotate(-90deg)` } :
                          arrow === 'B' ? { top: `${rowIdx * 12 - 0.5 * 1 / 2}rem`, left: `${colIdx * 12}rem`, transform: `rotate(90deg)` } :
                            arrow === 'TL' ? { top: `${rowIdx * 12 - 0.5 * 1 / 2}rem`, left: `${colIdx * 12}rem`, transform: `rotate(-135deg)`, width: `${Math.SQRT2 * 12}rem` } :
                              arrow === 'TR' ? { top: `${rowIdx * 12 - 0.5 * 1 / 2}rem`, left: `${colIdx * 12}rem`, transform: `rotate(-45deg)`, width: `${Math.SQRT2 * 12}rem` } :
                                arrow === 'BL' ? { top: `${rowIdx * 12 - 0.5 * 1 / 2}rem`, left: `${colIdx * 12}rem`, transform: `rotate(135deg)`, width: `${Math.SQRT2 * 12}rem` } :
                                  arrow === 'BR' ? { top: `${rowIdx * 12 - 0.5 * 1 / 2}rem`, left: `${colIdx * 12}rem`, transform: `rotate(45deg)`, width: `${Math.SQRT2 * 12}rem` } : {}
                  }></div>
              ))
          )
        )}

        {questPos.map(
          (row, rowIdx) => row.map(
            (col, colIdx) => col &&
              <div
                key={`${rowIdx}-${colIdx}`}
                className={`
                  w-[calc((2/3)_*_12rem)] h-[calc((2/3)_*_12rem)] 
                  border rounded-xl bg-[var(--bgc)] cursor-pointer absolute -translate-x-1/2 -translate-y-1/2
                  flex items-center justify-center text-center
                  overflow-hidden p-[.5rem]
                `}
                style={{
                  top: `${rowIdx * 12}rem`,
                  left: `${colIdx * 12}rem`
                }}
              >
                {col}
              </div>
          )
        )}
      </div>
    </Container>
  );
}

export default QuestsPage;