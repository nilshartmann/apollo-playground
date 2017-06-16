//  This file was automatically generated and should not be edited.
/* tslint:disable */

export type ActivityState =
  "CREATED" |
  "STARTED" |
  "FINISHED";


export interface ProjectOverviewQuery {
  // Return a list of all projects. Rembember: all projects are "public"
  projects: Array< {
    key: string,
    title: string,
    owner: {
      name: string,
      id: string,
    },
    activities: Array< {
      state: ActivityState,
    } > | null,
    latestActivity: {
      id: string,
      title: string,
    },
  } > | null;
}
/* tslint:enable */
