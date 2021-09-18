//package lk.goldtroop.controller;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import javax.servlet.http.HttpServletRequest;
//import java.io.File;
//
//@RestController
//public class FileUploadController {
//
//    private final static Logger log = LoggerFactory.getLogger(FileUploadController.class);
//
//    @Autowired
//    private HttpServletRequest request;
//
//
//    @RequestMapping(value = "/uploadfile", method = RequestMethod.POST)
//    public
//    @ResponseBody
//    ResponseEntity handleFileUpload(@RequestParam("file") MultipartFile file) {
//        if (!file.isEmpty()) {
//            String uploadsDir = "/uploads/";
//            String realPathtoUploads = request.getServletContext().getRealPath(uploadsDir);
//            if (!new File(realPathtoUploads).exists()) {
//                new File(realPathtoUploads).mkdir();
//            }
//
//            log.info("realPathtoUploads = {}", realPathtoUploads);
//
//
//            String orgName = file.getOriginalFilename();
//            String filePath = realPathtoUploads + orgName;
//            File dest = new File(filePath);
//            file.transferTo(dest);
//        }
//    }
//}