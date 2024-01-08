package vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.Data.InitData;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.dao.PersonDao;
import vn.taksak.bo_sung_cac_truy_van_su_dung_StreamAPI.dao.Personlmpl;

@SpringBootApplication
public class BoSungCacTruyVanSuDungStreamApiApplication   {

	public static void main(String[] args) {
		SpringApplication.run(BoSungCacTruyVanSuDungStreamApiApplication.class, args);

	}
}
