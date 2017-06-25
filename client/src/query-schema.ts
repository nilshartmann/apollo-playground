//  This file was automatically generated and should not be edited.
/* tslint:disable */

export type ActivityState =
  "CREATED" |
  "STARTED" |
  "FINISHED";


export interface ActivityQueryVariables {
  projectId: string;
  currentActivityId: string;
}

export interface ActivityQuery {
  project: {
    id: string,
    title: string,
    activities: Array< {
      id: string,
      title: string,
      state: ActivityState,
    } >,
    currentActivity: {
      id: string,
      title: string,
      state: ActivityState,
      description: string,
      creator: UserSummaryFragment,
      assignee: UserSummaryFragment,
    },
  };
}

export interface ProjectOverviewQuery {
  // Return a list of all projects. Rembember: all projects are "public"
  projects: Array< {
    id: string,
    title: string,
    owner: {
      name: string,
      id: string,
    },
    activities: Array< {
      state: ActivityState,
    } >,
    latestActivity: {
      id: string,
      title: string,
    },
  } > | null;
}

export interface UserSummaryFragment {
  id: string;
  name: string;
}
/* tslint:enable */
