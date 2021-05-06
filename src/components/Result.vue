<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-alert prominent type="error">
          <v-row align="center">
            <v-col class="grow">
              <div class="text-h5 text-md-h4">
                Resultado da auto-avaliacao para o novo coronavirus (COVID-19)
              </div>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="2">
        <v-icon x-large> {{ icons.mdiCalendar }} </v-icon>
      </v-col>
      <v-col cols="10">
        <div class="text-h5 text-md-h4">
          {{ $t("validatedAt") }} {{ dateTime[0] }} {{ $t("at") }}
          {{ dateTime[1] }}.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-icon x-large> {{ icons.mdiDownload }} </v-icon>
      </v-col>
      <v-col cols="10">
        <v-col cols="12" md="6"
          ><v-btn
            class="btn"
            color="primary"
            elevation="2"
            outlined
            raised
            x-large
            >Resultado por Email
          </v-btn></v-col
        >
        <v-col cols="12" md="6"
          ><v-btn
            class="btn"
            color="primary"
            elevation="2"
            outlined
            raised
            x-large
          >
            Baixar resultado (PDF)
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-icon x-large> {{ icons.mdiInformation }} </v-icon>
      </v-col>
      <v-col cols="10">
        <div class="text-justify">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as moment from "moment";
import store from "../store";
import { mdiCalendar, mdiDownload, mdiInformation } from "@mdi/js";

export default {
  name: "result",
  store: store,
  data: () => ({
    resultType: "safe",
    icons: {
      mdiCalendar,
      mdiDownload,
      mdiInformation,
    },
  }),
  computed: {
    dateTime() {
      const today = moment();
      const date = today.format("DD/MM/YYYY");
      const from = today.format("HH:mm");
      const to = today.endOf("day").format("HH:mm");
      return [date, from, to];
    },
  },
};
</script>

