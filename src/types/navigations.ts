export type AppStackParamList = {
    "Home": undefined,
    "Information": {
        selectedNumber: number
    }
    "gameOver": {
        rounds: number,
        selectedNumber: number,
    }
}

export type AllScreenParamList = {
    selectedNumber: number
}

export interface RootStackParamList extends AppStackParamList{
    
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }